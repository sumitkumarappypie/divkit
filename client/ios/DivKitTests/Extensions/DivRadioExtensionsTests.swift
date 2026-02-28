@testable import DivKit
import XCTest

final class DivRadioExtensionsTests: XCTestCase {
  private let resolver = DivBlockModelingContext().expressionResolver

  func test_Type() {
    XCTAssertEqual(DivRadio.type, "radio")
  }

  func test_ValueVariable() {
    let option = DivRadio.Option(value: .value("opt1"))
    let radio = DivRadio(
      options: [option],
      valueVariable: "selected_var"
    )
    XCTAssertEqual(radio.valueVariable, "selected_var")
  }

  func test_DefaultOrientation() {
    let option = DivRadio.Option(value: .value("opt1"))
    let radio = DivRadio(
      options: [option],
      valueVariable: "selected_var"
    )
    XCTAssertEqual(radio.resolveOrientation(resolver), .vertical)
  }

  func test_DefaultItemSpacing() {
    let option = DivRadio.Option(value: .value("opt1"))
    let radio = DivRadio(
      options: [option],
      valueVariable: "selected_var"
    )
    XCTAssertEqual(radio.resolveItemSpacing(resolver), 8)
  }

  func test_DefaultIsEnabled() {
    let option = DivRadio.Option(value: .value("opt1"))
    let radio = DivRadio(
      options: [option],
      valueVariable: "selected_var"
    )
    XCTAssertTrue(radio.resolveIsEnabled(resolver))
  }

  func test_OptionValue() {
    let option = DivRadio.Option(value: .value("opt1"))
    XCTAssertEqual(option.resolveValue(resolver), "opt1")
  }

  func test_OptionTextIsNilByDefault() {
    let option = DivRadio.Option(value: .value("opt1"))
    XCTAssertNil(option.resolveText(resolver))
  }

  func test_OptionWithText() {
    let option = DivRadio.Option(
      text: .value("Option 1"),
      value: .value("opt1")
    )
    XCTAssertEqual(option.resolveText(resolver), "Option 1")
  }
}
