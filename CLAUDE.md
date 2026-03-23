# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DivKit is an open-source Server-Driven UI (SDUI) framework by Yandex. It renders native UI from JSON specifications across Android, iOS, Web, and Flutter. The JSON schema is the single source of truth — platform clients are largely generated from it.

Current version is tracked in the `/version` file (currently 32.39.0).

## Repository Layout

```
client/android/      — Android client (Kotlin/Java, Gradle, ~40 modules)
client/ios/          — iOS client (Swift, SPM)
client/web/divkit/   — Web client (TypeScript/Svelte, Vite)
client/flutter/      — Flutter client (Dart)
client/multiplatform/ — Kotlin Multiplatform experiment
schema/              — JSON schema files (~189) defining all DivKit element types
api_generator/       — Python code generator that produces platform models from schema
json-builder/        — Server-side JSON builders (Kotlin, TypeScript, Python)
test_data/           — Sample layouts and regression test data
visual-editor/       — Web-based visual editor
```

## Build Commands

### Android (working directory: `client/android/`)

```bash
./gradlew assembleDemoDebug          # Build demo app (debug)
./gradlew assembleDemoRelease        # Build demo app (release)
./gradlew unitTests                  # Run all unit tests + lint
./gradlew finalVerification          # Full verification (depends on unitTests)
./gradlew :div:test                  # Run tests for a single module
./gradlew :div-core:test             # Run tests for div-core module
```

Key Android config: minSdk 21, compileSdk 35, Kotlin 1.8 language version, JVM target 1.8. Tests run with `maxParallelForks = 1` (Robolectric init overhead) and 4GB heap.

### iOS (working directory: `client/ios/`)

```bash
swift build                          # Build all targets
swift test                           # Run tests
```

Platforms: iOS 13+, macOS 10.15+. Swift toolchain 5.9. Warnings treated as errors (`-warnings-as-errors`).

### Web (working directory: `client/web/divkit/`)

```bash
npm run build:prod                   # Full production build (CJS + ESM + IIFE)
npm run build:watch                  # Dev server with HMR
npm run test:unit                    # Vitest unit tests
npm run test:testplane               # Visual regression tests
npm run check:ts                     # TypeScript type checking
npm run check:eslint                 # ESLint
npm run check:svelte                 # Svelte type checking
```

Web is built with Vite 5 + Svelte 4. Expression parser is generated with Peggy (`npm run build:peggy`).

### API Generator (working directory: `api_generator/`)

```bash
python3 -m api_generator -c <config.json> -s <schema_dir> -o <output_dir>
```

Generates platform-specific data models (Kotlin, Swift, TypeScript, Python) from JSON schema.

## Architecture

### Data Flow

```
JSON Schema (schema/) → API Generator → Platform Data Models → Native Views
                                           ↓
                         Templates + Variables → Expression Engine → Dynamic Values
```

### Android Module Structure

Core modules form a dependency chain: `div-core` → `div-data` → `div-json` → `div-evaluable`. The main `div` module contains the rendering engine. Specialized modules are optional add-ons:

- **Image loaders:** `glide`, `picasso`, `coil` (pick one)
- **Rich content:** `div-markdown`, `div-svg`, `div-lottie`, `div-rive`
- **Interaction:** `div-gesture`, `div-pinch-to-zoom`, `div-video`
- **Compose:** `compose`, `compose-interop`
- **Infra:** `div-storage`, `div-network`, `div-histogram`, `div-states`

DI uses **Yatagan** (Yandex's lightweight alternative to Dagger). Opt-ins are configured globally in root `build.gradle`:
```
-opt-in=com.yandex.yatagan.ConditionsApi
-opt-in=com.yandex.div.core.annotations.InternalApi
-opt-in=com.yandex.div.core.annotations.ExperimentalApi
```

### iOS Module Structure

SPM package at `client/ios/Package.swift`. Key targets: `DivKit`, `DivKitExtensions`, `DivKitMarkdownExtension`, `DivKitSVG`, `LayoutKit`, `LayoutKitInterface`, `Serialization`. Depends on VGSL (Yandex rendering lib).

### Web Module Structure

Svelte 4 components in `client/web/divkit/src/components/`. Expression parser at `src/expressions/expressions.peggy`. Multiple build outputs: server-side, client, client-hydratable, client-devtool (each in CJS + ESM + IIFE).

### Schema System

Schema files in `schema/` define every DivKit element type, their required/optional properties, types, enums, and defaults. When creating or modifying DivKit JSON, always verify against the schema. The API generator reads these schemas to produce platform code, so schema changes propagate to all platforms.

### Expression Engine

DivKit supports dynamic expressions in JSON values (e.g., `"@{variable_name}"`). The expression engine is implemented per-platform: `div-evaluable` on Android, custom parser on iOS, Peggy-generated parser on Web.

### Template System

Templates are defined in the `templates` section of DivKit JSON. Template properties use `$` prefix in property names (not values) to mark substitutable fields. Templates enable reuse of UI patterns across a card.

## Binary Compatibility

Android uses `kotlinx.binary-compatibility-validator`. Public API dumps are tracked. The `apiValidation` block in root `build.gradle` lists ignored projects and non-public markers (`@ExperimentalApi`, `@InternalApi`).
