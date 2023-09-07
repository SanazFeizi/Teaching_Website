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
  if (name === "Yasmeen Allafi") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  } else if (name === "Lizzie Carlisle") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  } else if (name === "Shan Chen") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  } 
  else if (name === "Anthony Crimaldi") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Rosa Gomez") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Jarod Hickman") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Grace Inacio") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Elise Jennings") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Hailey Kerlin") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Emily Lim") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Sarah Lopez") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Nicole Machnowski") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Stayashey Sagastume-Castillo") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Analyssa Smith") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Franky Tan") {
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