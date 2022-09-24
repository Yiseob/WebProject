<template>
  <body class="d-flex text-center text-bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Micro Garden</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a
              class="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
              href="#"
              >Home</a
            >
            <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main class="px-3">
        <h1 class="center">Micro Garden</h1>
        <p class="lead"></p>
        <p class="lead">
          <a
            href="#"
            class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >Learn more</a
          >
        </p>
      </main>

      <footer class="mt-auto text-white-50">
        <p>
          Cover template for
          <a href="https://microgarden.com/" class="text-white">Bootstrap</a>,
          by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.
        </p>
      </footer>
    </div>
    <link
      rel="canonical"
      href="https://getbootstrap.com/docs/5.2/examples/cover/"
    />

    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
  </body>
</template>

<script>
export default {
  name: "Cover",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Shadows+Into+Light&display=swap");

body {
  height: 1200px;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  font-family: "Shadows Into Light", cursive;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
}

.center {
  font-size: 80px;
  font-weight: 800;
}

.cover-container {
  max-width: 42em;
  background-image: url(../../assets/CoverBackGround.jpg);
  background-size: cover;
}

.nav-masthead .nav-link {
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>