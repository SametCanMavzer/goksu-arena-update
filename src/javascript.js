$(document).ready(function () {
    $(".ikinci-i").click(function () {

        $(".menu").toggleClass("goster");
        $(".navbar").toggleClass("menu1");


    });

    const data = [
        {
            baslık: " Krampon ve Eldiven",
            content: `  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
              Repellat iusto tempora neque harum natus explicabo accusantium dolore cupiditate assumenda. 
              Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
             vero a corporis. Provident fuga cumque nulla nihil hic architecto.`,
            id: 1

        },
        {
            baslık: "Büfe",
            content: `  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
             Repellat iusto tempora neque harum natus explicabo accusantium dolore cupiditate assumenda. 
             Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
            vero a corporis. Provident fuga cumque nulla nihil hic architecto.asdsadsadsadsadasdas`,
            id: 2

        },
        {
            baslık: "Soyunma Odası ",
            content: ` asdsadsadsadsa Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
             Repellat iusto tempora neque harum natus explicabo accusantium dolore cupiditate assumenda. 
             Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
            vero a corporis. Provident fuga cumque nulla nihil hic architecto.`,
            id: 3

        },
        {
            baslık: "Zemin ",
            content: `  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
             Repellat iusto tempora neque asdsadsadsadsadsadharum natus explicabo accusantium dolore cupiditate assumenda. 
             Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
            vero a corporis. Provident fuga cumque nulla nihil hic architecto.`,
            id: 4

        },
        {
            baslık: "Saha BAKIMI ",
            content: `  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
             Repellat iusto tempora neque harum natus explicabo accusantium dolore cupiditate assumenda. 
             Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
            vero a corporis. Provident fuga cumque nulla nihil hic architecto.`,
            id: 5

        },
        {
            baslık: "Otopark ",
            content: `  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
             Repellat iusto tempora neque harum natus explicabo accusantium dolore cupiditate assumenda. 
             Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
            vero a corporis. Provident fuga cumque nulla nihil hic architecto.`,
            id: 6

        },

        {
            baslık: "Aydınlatma ",
            content: `  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Est commodi provident ipsam voluptate dolore aliquid eligendi iure quo necessitatibus.
             Repellat iusto tempora neque harum natus explicabo accusantium dolore cupiditate assumenda. 
             Laudantium asperiores autem rem, placeat aliquam similique iusto, accusantium ullam,
            vero a corporis. Provident fuga cumque nulla nihil hic architecto.`,
            id: 7

        }


    ]


    let h2 = document.querySelector(".products h2");
    let p = document.querySelector(".products p");
    let items = document.querySelectorAll(".product-item");


    items.forEach((item) => {

        item.addEventListener("click", () => {

            let id = Number(item.id);

            items.forEach((itemx) => {

                itemx.classList.remove("active");
            })

            item.classList.add("active");

            data.forEach((data => {

                if (data.id === id) {
                    h2.innerHTML = data.baslık;
                    p.innerHTML = data.content;

                }


            }))


        })


    })


    















});
