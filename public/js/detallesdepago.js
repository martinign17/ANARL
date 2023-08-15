const mercadopago = new MercadoPago("TEST-66a2f2c7-5582-4f61-8512-d4231581001a", {
    locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  });
  
  document.getElementById("checkout-btn").addEventListener("click", function () {
    const orderData = {
      quantity: document.getElementById("quantity").innerHTML,
      description: document.getElementById("product-description").innerHTML,
      price: document.getElementById("unit-price").innerHTML,
    };
  
    fetch("http://localhost:3001/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function () {
        alert("Unexpected error");
      });
  });
  
  function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    const bricksBuilder = mercadopago.bricks();
  
    const renderComponent = async (bricksBuilder) => {
      if (window.checkoutButton) window.checkoutButton.unmount();
      await bricksBuilder.create(
        "wallet",
        "button-checkout", // class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error) => console.error(error),
            onReady: () => {},
          },
        }
      );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
  }