@testable import DivKit
import XCTest

final class DivCheckboxExtensionsTests: XCTestCase {
  private let resolver = DivBlockModelingContext().expressionResolver

  func test_Type() {
    XCTAssertEqual(DivCheckbox.type, "checkbox")
  }

  func test_DefaultIsEnabled() {
    let checkbox = DivCheckbox(
      isCheckedVariable: "checked_var"
    )
    XCTAssertTrue(checkbox.resolveIsEnabled(resolver))
  }

  func test_IsCheckedVariable() {
    let checkbox = DivCheckbox(
      isCheckedVariable: "my_checked_var"
    )
    XCTAssertEqual(checkbox.isCheckedVariable, "my_checked_var")
  }

  func test_DefaultAlpha() {
    let checkbox = DivCheckbox(
      isCheckedVariable: "checked_var"
    )
    XCTAssertEqual(checkbox.resolveAlpha(resolver), 1.0)
  }

  func test_DefaultVisibility() {
    let checkbox = DivCheckbox(
      isCheckedVariable: "checked_var"
    )
    XCTAssertEqual(checkbox.resolveVisibility(resolver), .visible)
  }

  func test_OptionalColorsAreNil() {
    let checkbox = DivCheckbox(
      isCheckedVariable: "checked_var"
    )
    XCTAssertNil(checkbox.resolveCheckMarkColor(resolver))
    XCTAssertNil(checkbox.resolveOffColor(resolver))
    XCTAssertNil(checkbox.resolveOnColor(resolver))
  }
}
