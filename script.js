$(document).ready(function() {
  $(".accordion").click(function() {
    var panel = $(this).next(".panel");

    if (panel.hasClass("active")) {
      panel.removeClass("active").slideUp("fast");
    } else {
      $(".panel.active").removeClass("active").slideUp("fast");
      panel.addClass("active").slideDown("fast");
    }
  });

  var bookTable = document.querySelector(".book-table tbody");

  nodes.forEach(function(book) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <button class="accordion">${book.TITLE}</button>
        <div class="panel">
          <p>${book.longer_description}</p>
        </div>
      </td>
      <td>${book.year}</td>
      <td>${book.author}</td>
      <td>${book.description}</td>
    `;
    bookTable.appendChild(row);

    var expandedRow = document.createElement("tr");
    expandedRow.classList.add("expanded-row");
    expandedRow.innerHTML = `
      <td colspan="4">
        <p class="longer-description">${book.longer_description}</p>
      </td>
    `;
    bookTable.appendChild(expandedRow);
  });

  var accordionButtons = document.querySelectorAll(".accordion");
  accordionButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var currentRow = button.closest("tr");
      var expandedRow = currentRow.nextElementSibling;
      expandedRow.classList.toggle("active");
    });
  });
});
