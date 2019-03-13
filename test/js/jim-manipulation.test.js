

describe('removingClass', () => {
    let myParagraph;
    beforeEach(() => {
        // Arrange
        myParagraph = document.createElement('p');
        myParagraph.classList.add('test-class')
    });

    test('should remove a class from an element', () => {

        // Act
        removeClass(myParagraph, 'test-class');

        // Assert
        expect(myParagraph.classList.contains('test-class')).toBeFalsy();
    });
});
function removeClass(element, classToRemove) {
    element.classList.remove(classToRemove);
};