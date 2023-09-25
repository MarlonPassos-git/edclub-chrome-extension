export function reloadLesson() {
  const maybeSpan = document.querySelector<HTMLSpanElement>(".edicon-refresh")
  /** https://prnt.sc/HA0cxUpECJly */
 const maybeButton = document.querySelector<HTMLButtonElement>(".btn.navbar-goback.hoverable-button.default")

  if (maybeSpan) {
    maybeSpan.click()
  }
  if (maybeButton) {
    maybeButton.click()
  }
}