/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
function Book(authors, language, subject, title) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;
  this.comment = [];

  /**
   * @returns a list item representing this Book
   */
  this.render = function () {
      const ul = document.querySelector(".bookComments");
      const renderedComments = bookComments.map(renderComment);
      ul.replaceChildren(...renderedComments);
    };
    /* NOTE: Change render! This is currently a barebones template. */
    const div = document.createElement("div");
    div.textContent = this.title;

    // Create favorite button
    const favButton = document.createElement("button");
    favButton.textContent = this.isFavorite ? "★" : "☆";
    div.append(favButton);

    // Toggle favorite property on click
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "★" : "☆";
    });
//comment section start//
    const createBookCommentSection = (bookComment) => {
      const commentSection = document.createElement("section");
      
      const comment = document.createElement("p");
      comment.textContent = bookComment.comment;
      commentSection.append(comment);
      const renderComment = (bookComment) => {
        const li = document.createElement("li");
        li.classList.add("comment");

        const commentSection = createBookCommentSection(bookComment);
        li.append(commentSection);

        return li;
      };

      render(createBookCommentSection);

      const addCommentBtn = document.createElement("button");
      addCommentBtn.className = "commBtn";
      addCommentBtn.textContent = "Comment";
      div.prepend(addCommentBtn);

      const commentInput = document.createElement("input");
      addCommentBtn.addEventListener("click", () => {
        //open up form to input upto 280 char of text and keep on page after sorting
        const userInput = commentInput.value;
        bookComment.comment = userInput;
        renderApp(bookComments);
        const submitButton=document.createElement("button");
        submitButton.textContent="Submit";
        submitButton.addEventListener("click", () =>{
          //submits comment
          //then need to rerender with comment stuck on
        })

      });

      commentSection.append(commentInput, commentBtn);
      return commentSection;
    };
    return div;
  };
}
