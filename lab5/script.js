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