function showStudentDetails(name) {
  var studentDetails = getStudentDetails(name); // You need to implement this function
  var modal = document.getElementById("studentModal");
  var studentDetailsElement = document.getElementById("studentDetails");

  studentDetailsElement.innerHTML = studentDetails;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("studentModal");
  modal.style.display = "none";
}

function getStudentDetails(name) {
  if (name === "Hannah Allocco") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  } else if (name === "Esteban Arias") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  } else if (name === "Jean Cirincione") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  } 
  else if (name === "Matthew Cruz") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Brandon Fried") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Pooja Gandhi") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Dara Jackson") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Gabrielle Kim") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Paige Kurzawa") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Jiaxi Nie") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Andrew Petrocelli") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Yiji Wang") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Sammi Wu") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Maggie Zheng") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }

  else {
    return "<p>No details available for this student.</p>";
  }
}