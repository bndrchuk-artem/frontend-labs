function validateForm() {
    const fullName = document.getElementById("full-name");
    const variant = document.getElementById("variant");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone");
    const idcard = document.getElementById("idcard");
    const output = document.querySelector(".output");

    const refullName = /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const reVariant = /^\d{2}$/;
    const reGroup = /^[A-ZА-ЯІЇЄҐ]{2}-\d{2}$/;
    const rePhone = /^\+380\d{9}$/;
    const reIdCard = /^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/;

    const fields = [
    {el: fullName, regex: refullName},
    {el: variant, regex: reVariant},
    {el: group, regex: reGroup},
    {el: phone, regex: rePhone},
    {el: idcard, regex: reIdCard}
    ];

    let allValid = true;

    fields.forEach(f => {
    if (!f.regex.test(f.el.value.trim())) {
        f.el.classList.add("error");
        allValid = false;
    } else {
        f.el.classList.remove("error");
    }
    });

    if (allValid) {
        output.innerHTML = `
        <p>П.І.Б.: ${fullName.value}</p>
        <p>Варіант: ${variant.value}</p>
        <p>Група: ${group.value}</p>
        <p>Номер Телефону: ${phone.value}</p>
        <p>ID-Карта: ${idcard.value}</p>
        `;
    }
}

const variant = 1; // номер варіанту
const table = document.getElementById("table");
const colorPicker = document.getElementById("input-color");

let count = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
    const cell = document.createElement("td");
    cell.textContent = count;

    if (count === variant) {        
        cell.addEventListener("mouseenter", () => {
        const randomBackgroundColor = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
        cell.style.backgroundColor = randomBackgroundColor;
        const randomTextColor = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
        cell.style.color = randomTextColor;
        });

        cell.addEventListener("click", () => {
        cell.style.backgroundColor = colorPicker.value;
        });

        cell.addEventListener("dblclick", () => {
        const rowCells = row.children;
        for (let c of rowCells) {
            c.style.backgroundColor = colorPicker.value;
        }
        });
    }

    row.appendChild(cell);
    count++;
    }
    table.appendChild(row);
}

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}