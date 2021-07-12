const advancedBtn = '#details-button, #advancedButton';
const proceedLnk = '#proceed-link, #exceptionDialogButton';
const defaultTimeout = 10000; // 10sec
class Page {

    getElement(element) {
        return $(element);
    }

    getAllElements(element) {
        return $$(element);
    }

    getElementByIndex(element, index) {
        return this.getAllElements(element)[index];
    }

    isElementClickable(element) {
        return this.getElement(element).isClickable();
    }

    isElementByIndexClickable(element, index) {
        return this.getElementByIndex(element, index).isClickable();
    }

    waitUntilClickable(element, timeout) {
        browser.waitUntil(() => {
            return this.getElement(element).isClickable();
        }, {timeout: timeout});
    }

    waitUntilClickableByIndex(element, index) {
        browser.waitUntil(() => {
            return this.getElementByIndex(element, index).isClickable();
        });
    }

    isElementDisplayed(element) {
        return this.getElement(element).isDisplayed();
    }

    isElementByIndexDisplayed(element, index) {
        return this.getElementByIndex(element, index).isDisplayed();
    }

    waitUntilDisplayed(element, timeout = defaultTimeout) {
        browser.waitUntil(() => {
            return this.getElement(element).isDisplayed();
        }, {timeout: timeout});
    }

    waitUntilNotDisplayed(element, timeout = defaultTimeout) {
        browser.waitUntil(() => {
            return !(this.getElement(element).isDisplayed());
        }, {timeout: timeout});
    }

    waitUntilDisplayedByIndex(element, index) {
        browser.waitUntil(() => {
            return this.getElementByIndex(element, index).isDisplayed();
        });
    }

    isElementSelected(element) {
        return this.getElement(element).isSelected();
    }

    isElementByIndexSelected(element, index) {
        return this.getElementByIndex(element, index).isSelected();
    }

    waitUntilSelected(element) {
        browser.waitUntil(() => {
            return this.getElement(element).isSelected();
        });
    }

    waitUntilSelectedByIndex(element, index) {
        browser.waitUntil(() => {
            return this.getElementByIndex(element, index).isSelected();
        });
    }

    isElementExisting(element) {
        return this.getElement(element).isExisting();
    }

    isElementNotExisting(element) {
        return !this.getElement(element).isExisting();
    }

    isElementByIndexExisting(element, index) {
        return this.getElementByIndex(element, index).isExisting();
    }

    waitUntilExists(element, timeout = defaultTimeout) {
        browser.waitUntil(() => {
            return this.getElement(element).isExisting();
        }, {timeout: timeout});
    }

    waitUntilExistsByIndex(element, index) {
        browser.waitUntil(() => {
            return this.getElementByIndex(element, index).isExisting();
        });
    }

    waitUntilExistsWithRefresh(element, timeout = defaultTimeout) {
        browser.refresh();
        this.waitUntilExists(element, timeout);
    }

    click(element) {
        this.waitUntilClickable(element);
        this.getElement(element).click();
    }

    clickByIndex(element, index) {
        this.waitUntilClickableByIndex(element, index);
        this.getElementByIndex(element, index).click();
    }

    clickDropdownItemByIndex(element, index) {
        this.waitUntilClickable(element);
        this.getElement(element).selectByIndex(index);
    }

    clickDropdownItemByText(element, text) {
        this.waitUntilClickable(element);
        this.getElement(element).selectByVisibleText(text);
    }

    getElementText(element) {
        this.waitUntilDisplayed(element);
        return this.getElement(element).getText();
    }

    getElementByIndexText(element, index) {
        this.waitUntilDisplayedByIndex(element, index);
        return this.getElementByIndex(element, index).getText();
    }

    waitUntilElementIncludesText(element, text) {
        browser.waitUntil(() => {
            return this.getElementText(element).includes(text);
        });
    }

    waitUntilElementByIndexIncludesText(element, index, text,timeout = defaultTimeout) {
        browser.waitUntil(() => {
            return this.getElementByIndexText(element, index).includes(text);
        }, {timeout: timeout});
    }

    getElementValue(element) {
        this.waitUntilDisplayed(element, defaultTimeout);
        return this.getElement(element).getValue();
    }

    getElementByIndexValue(element, index) {
        this.waitUntilDisplayedByIndex(element, index);
        return this.getElementByIndex(element, index).getValue();
    }

    waitUntilElementIncludesValue(element, value) {
        browser.waitUntil(() => {
            return this.getElementValue(element).includes(value);
        });
    }

    waitUntilElementByIndexIncludesValue(element, index, value) {
        browser.waitUntil(() => {
            return this.getElementByIndexValue(element, index).includes(value);
        });
    }

    getElementAttribute(element, attribute) {
        return this.getElement(element).getAttribute(attribute);
    }
    getElementCssProperty(element, attribute) {
        return this.getElement(element).getCSSProperty(attribute);
    }

    getElementByIndexAttribute(element, index, attribute) {
        this.waitUntilExistsByIndex(element, index);
        return this.getElementByIndex(element, index).getAttribute(attribute);
    }

    waitUntilElementIncludesAttribute(element, attribute, text) {
        browser.waitUntil(() => {
            return this.getElementAttribute(element, attribute).includes(text);
        });
    }

    waitUntilElementByIndexIncludesAttribute(element, index, attribute, text) {
        browser.waitUntil(() => {
            return this.getElementByIndexAttribute(element, index, attribute).includes(text);
        });
    }

    scrollElementIntoViewTop(element) {
        this.getElement(element).scrollIntoView();
    }

    scrollElementIntoViewBottom(element) {
        this.getElement(element).scrollIntoView(false);
    }

    scrollElementByIndexIntoViewTop(element, index) {
        this.getElementByIndex(element, index).scrollIntoView();
    }

    scrollElementByIndexIntoViewBottom(element, index) {
        this.getElement(element, index).scrollIntoView(false);
    }

    setValue(element, value) {
        this.waitUntilDisplayed(element);
        this.getElement(element).setValue(value);
    }

    setValueByIndex(element, index, value) {
        this.waitUntilDisplayedByIndex(element, index);
        this.getElementByIndex(element, index).setValue(value);
    }

    addValue(element, value) {
        this.waitUntilDisplayed(element);
        this.getElement(element).addValue(value);
    }

    addValueByIndex(element, index, value) {
        this.waitUntilDisplayedByIndex(element, index);
        this.getElementByIndex(element, index).addValue(value);
    }

    clearValue(element) {
        this.waitUntilDisplayed(element);
        this.getElement(element).clearValue();
    }

    clearValueByIndex(element, index) {
        this.waitUntilDisplayedByIndex(element, index);
        this.getElementByIndex(element, index).clearValue();
    }

    clearValueByBackspace(element) {
        this.waitUntilDisplayed(element);
        const inputLength = this.getElementValue(element).length;
        let i = 0
        for (i = 0; i <= inputLength; i++) {
            this.addValue(element, 'Backspace');
        }
    }

    clickBackspace(element) {
        this.addValue(element, 'Backspace');
    }

    switchToSsoMode(key, value) {
        browser.execute(function (key, value) {
            this.localStorage.setItem(key, value)
        }, key, value)
        browser.refresh();
    }

    getListSize(element) {
        return this.getAllElements(element).length;
    }

    isBrowserAdvancedBtnDisplayed() {
        return this.isElementDisplayed(advancedBtn);
    }

    clickBrowserAdvancedBtn() {
        this.click(advancedBtn);
    }

    clickBrowserProceedLnk() {
        this.click(proceedLnk);
    }

    clickEnterKey() {
        browser.keys("\uE007")
    }

    displayBlock(element) {
        browser.execute(
            (el) => el.style.display = 'block',
            $(element)
        );
    }
}

module.exports = new Page();