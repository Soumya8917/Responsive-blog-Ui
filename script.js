:root {
    --primary-color: #3498db;
    --primary-dark: #2980b9;
    --secondary-color: #e74c3c;
    --text-color: #333;
    --background-color: #fff;
    --border-color: #ddd;
    --heading-color: #2c3e50;
    --link-color: #3498db;
    --link-hover-color: #2980b9;
}

[data-theme="dark"] {
    --primary-color: #4299e1;
    --primary-dark: #3182ce;
    --text-color: #f7fafc;
    --background-color: #1a202c;
    --border-color: #4a5568;
    --heading-color: #f7fafc;
    --link-color: #4299e1;
    --link-hover-color: #3182ce;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 20px 0;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
}

nav ul li a:hover {
    color: var(--primary-dark);
}

.toggle-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--primary-color);
}

input:focus + .slider {
    box-shadow: 0 0 1px var(--primary-color);
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.section {
    padding: 60px 0;
    text-align: center;
}

.section h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
    color: var(--heading-color);
}

.blog-preview {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 30px;
    margin-bottom: 30px;
    text-align: left;
}

.blog-preview h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--heading-color);
}

.blog-preview p {
    font-size: 1.1rem;
    color: var(--text-color);
    margin-bottom: 15px;
}

.blog-preview a {
    color: var(--link-color);
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    margin-top: 10px;
}

.blog-preview a:hover {
    color: var(--link-hover-color);
}

.single-blog-post {
    padding: 60px 0;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
}

.single-blog-post h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--heading-color);
}

.single-blog-post p {
    font-size: 1.1rem;
    color: var(--text-color);
    line-height: 1.8;
    margin-bottom: 20px;
}

.search-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.search-container input[type="text"] {
    padding: 10px;
    width: 300px;
    border: 1px solid var(--border-color);
    border-radius: 5px 0 0 5px;
    font-size: 1rem;
    color: var(--text-color);
    background-color: var(--background-color);
}

.search-container button {
    padding: 10px 15px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 1rem;
}

.search-container button:hover {
    background-color: var(--primary-dark);
}

.category-filter {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.category-filter select {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 1rem;
    color: var(--text-color);
    background-color: var(--background-color);
}

footer {
    background-color: var(--primary-color);
    color: white;
    padding: 20px 0;
    text-align: center;
    margin-top: 60px;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    nav ul {
        flex-direction: column;
        text-align: center;
    }

    nav ul li {
        margin: 10px 0;
    }

    .section {
        padding: 40px 0;
    }

    .section h2 {
        font-size: 2rem;
    }

    .blog-preview h3 {
        font-size: 1.2rem;
    }

    .single-blog-post h2 {
        font-size: 2rem;
    }

    .search-container input[type="text"] {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .search-container button {
        border-radius: 5px;
        width: 100%;
    }
}
