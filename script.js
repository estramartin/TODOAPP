
window.addEventListener('load', () => {



    var items = ['Cebolla', 'Batata'];
    var lista = document.getElementById("lista");
    var itemNombre = document.getElementById("itemNombre");
    var btnAgregar = document.getElementById("btnAgregar");


    btnAgregar.addEventListener('click', () => {
        agregarElemento();
    });


    const agregarElemento = () => {

        let item = document.getElementById('ingreso').value;
        items.push(item);
        console.log(items);

        ingreso.value = "";

        imprimirLista();
    }


    const imprimirLista = () => {
        lista.innerHTML = "";
        items.forEach((item, index) => {

            let elementoLi = document.createElement('li');
            let spanli = document.createElement("span");


            spanli.innerText = item;
            spanli.classList.add("d-inline-block", "w-50", "pt-3", "fw-bold", "mx-5");

            elementoLi.append(spanli);
            elementoLi.classList.add("d-inline-block", "w-75", "border", "border-1", "m-0");

            lista.append(elementoLi);

            let btnEditar = document.createElement('Button');
            btnEditar.innerText = "Editar";
            btnEditar.classList.add("m-2", "btn", "btn-warning");
            btnEditar.addEventListener('click', () => editarElemento(index));

            let btnEliminar = document.createElement('Button');
            btnEliminar.innerText = "Borrar";
            btnEliminar.classList.add("btn", "btn-danger");
            btnEliminar.addEventListener('click', () => eliminarElemento(index));

            elementoLi.append(btnEditar);
            elementoLi.append(btnEliminar);



        });


    }


    const eliminarElemento = (index) => {

        items.splice(index, 1);

        imprimirLista();


    }

    const editarElemento = (index) => {
        let nombre = prompt('Ingrese el nuevo ítem', 'ej. Batata');


        if (nombre == "") {
            return;
        } else if (nombre == null) {

            return;

        }
        else {
            items[index] = nombre;

        }
        imprimirLista();
    }



    imprimirLista();

});