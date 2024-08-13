 const emailTemplate = `
    <div>
        <h1>Hola, {{name}}</h1>
        <p>Gracias por hacer esta orden.</p>
        <p>OrderID: {{orderid}}</p>
    </div>`;

    console.log(emailTemplate);

    module.exports = {
        emailTemplate
    }