$(function () {

    let resources = [
        {
            resource: 'users',
            url: 'https://jsonplaceholder.typicode.com/users',
        },
        {
            resource: 'posts',
            url: 'https://jsonplaceholder.typicode.com/posts',
        },
        {
            resource: 'comments',
            url: 'https://jsonplaceholder.typicode.com/comments',
        },
        {
            resource: 'albums',
            url: 'https://jsonplaceholder.typicode.com/albums',
        },
        {
            resource: 'photos',
            url: 'https://jsonplaceholder.typicode.com/photos',
        },
        {
            resource: 'todos',
            url: 'https://jsonplaceholder.typicode.com/todos',
        },
    ];

    fillSelect();
    fetchUrl('0');

    function fillSelect() {
        let options = '';
        for (let i = 0; i < resources.length; i++) {
            options += `<option value="${i}">${resources[i].resource}</option>`
        }
        $('.resourcesSelect').html(options);
        $('.resourcesSelect option:first-child').attr("selected", "selected");
    }

    $('.resourcesSelect').on('change', function () {
        fetchUrl(this.value);
    })

    function fetchUrl(resourceInd) {
        fetch(resources[resourceInd].url)
            .then(response => response.json())
            .then(data => {
                display(resourceInd, data);
            });
    }

    function display(index, data) {
        switch (index) {
            case '0':
                displayUsers(data);
                break;
            case '1':
                displayPosts(data);
                break;
            case '2':
                displayComments(data);
                break;
            case '3':
                displayAlbums(data);
                break;
            case '4':
                displayPhotos(data);
                break;
            case '5':
                displayTodos(data);
                break;
        }
    }

    function displayUsers(users) {
        let code = `<h1 class="text-center">Users</h1>`;
        for (let i = 0; i < users.length; i++) {
            let u = users[i];
            code += `<div class="col-sm-6 col-md-4">
                        <div class="card border-info">
                            <h5 class="card-header bg-info text-white">${u.username}</h5>
                            <div class="card-body">
                                <h5 class="card-title pb-2">${u.name}</h5>
                                <p class="card-text">Address: <span class="text-primary">${u.address.street} ${u.address.suite}, ${u.address.city}</span></p>
                                <p class="card-text">Email: <span class="text-primary">${u.email}</span></p>
                                <a href="#" class="card-link">${u.website}</a>
                            </div>
                        </div>
                    </div>`;
        }
        $(".row").html(code);
    }

    function displayPosts(posts) {
        let code = '<h1 class="text-center">Posts</h1>';
        for (let i = 0; i < posts.length; i++) {
            let p = posts[i];
            code += `<div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card border-info border-2 mb-3" style="max-width: 18rem;">
                            <div class="card-body">
                                <div class="card-header bg-transparent border-info">
                                    <h5 class="card-title">${capitalize(p.title)}</h5>
                                </div>
                                <p class="card-text py-3">${p.body}</p>
                            </div>
                        </div>
                    </div>`
        }
        $(".row").html(code);
    }

    function displayComments(comments) {
        let code = '<h1 class="text-center">Comments</h1>';
        for (let i = 0; i < comments.length; i++) {
            let c = comments[i];
            code += `<div class="col-sm-6 col-md-4">
                        <div class="card border-success border-2">
                            <div class="card-body">
                                <h5 class="card-title">${capitalize(c.name)}</h5>
                                <p class="card-text">${c.body}</p>
                                <a href="mailto:${c.email}" class="card-link">${c.email}</a>
                            </div>
                        </div>
                    </div>`
        }
        $(".row").html(code);
    }

    function displayAlbums(albums) {
        let code = '<h1 class="text-center">Albums</h1>';
        let img = 'https://img.chip.com.tr/rcman/Cw1280h720q95gm/storage/files/images/2023/03/13/plak-kullerinden-dogdu-MKxQ.jpg';
        for (let i = 0; i < albums.length; i++) {
            let a = albums[i];
            code += `<div class="col-sm-6 col-md-4">
                        <div class="card text-bg-dark">
                            <img src="${img}" class="card-img opacity-25" alt="record" />
                            <div class="card-img-overlay">
                                <h5 class="card-title">${capitalize(a.title)}</h5>
                            </div>
                        </div>
                    </div>`
        }
        $(".row").html(code);
    }

    function displayPhotos(photos) {
        let code = '<h1 class="text-center">Photos</h1>';
        for (let i = 0; i < photos.length; i++) {
            let p = photos[i];
            code += `<div class="col-sm-6 col-md-4">
                        <div class="card">
                            <img src="${p.thumbnailUrl}" class="card-img-top" alt="">
                            <div class="card-body">
                                <p class="card-text text-center">${capitalize(p.title)}</p>
                            </div>
                        </div>
                    </div>`
        }
        $(".row").html(code);
    }

    function displayTodos(todos) {
        let code = '<h1 class="text-center">Todos</h1>';
        for (let i = 0; i < todos.length; i++) {
            let t = todos[i];
            code += `<div class="col-md-6 px-5">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ${t.completed ? 'checked' : ''}>
                            <label class="form-check-label" for="flexCheckDefault">
                                ${t.title}
                            </label>
                        </div>
                    </div>`
        }
        $(".row").html(code);
    }

    function capitalize(str) {
        return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    }
})
