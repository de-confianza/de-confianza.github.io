<template>
  <div class="w-full h-full flex flex-col">
    <header class="border border-b-andalucia-green-dark bg-andalucia-green-light text-white p-4 fixed top-0 w-full z-10">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl">Fermin D. Confianza</h1>
        <ul class="flex gap-4">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#valores">Nuestros valores</a></li>
          <li><a href="#fermin">Sobre Fermín</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main class="pt-10 pb-20 flex flex-col flex-1 overflow-auto h-100">
      <section id="inicio" class="mt-10 mb-20 p-10 rounded w-11/12 h-100 mx-auto bg-andalucia-gold-light">
        <div class="h-90" style="height:400px;" >
          <h2 class="text-2xl text-andalucia-green-dark">La confianza que necesitas</h2>
        </div>
      </section>
      <section id="" class="py-10">
        <div id="valores">
          <h3 class="mx-10 text-3xl">Nuestros Valores</h3>
          <section id="valores" class="p-10">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Valor 1 -->
              <div class="h-80 bg-andalucia-green-dark p-6 rounded-lg shadow-lg">
                <h4 class="text-xl font-bold text-white">Andalucía Primero: Firmeza y Futuro</h4>
                <p class="text-white">Unidos en la determinación de llevar a nuestra tierra hacia adelante.</p>
              </div>

              <!-- Valor 2 -->
              <div class="bg-andalucia-gold-dark p-6 rounded-lg shadow-lg">
                <h4 class="text-xl font-bold text-white">Prosperidad Inquebrantable</h4>
                <p class="text-white">Nuestra fuerza radica en el progreso económico y la autosuficiencia regional.</p>
              </div>

              <!-- Valor 3 -->
              <div class="bg-andalucia-green-light p-6 rounded-lg shadow-lg">
                <h4 class="text-xl font-bold text-andalucia-green-dark">Tradición y Revolución</h4>
                <p class="text-andalucia-green-dark">Honrando nuestras raíces, abrazando el cambio audazmente.</p>
              </div>

              <!-- Otros valores -->
              <!-- Añade aquí más cuadros según sea necesario -->
            </div>
          </section>
        </div>
      </section>

      <section id="fermin" class="mx-10 text-lg mt-5 mb-10">
        <h3 class="text-3xl">Nuestra Chapa</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis lectus, pharetra et nulla sed, laoreet
          cursus arcu. Morbi imperdiet, risus accumsan dapibus varius, nibh odio pellentesque ligula, eu gravida purus
          lacus in neque. Maecenas posuere viverra urna commodo consectetur. Nullam gravida diam eget odio hendrerit, sit
          amet lacinia ex posuere. Morbi a facilisis lacus. Morbi cursus neque et molestie dapibus. Etiam consequat ac
          augue at dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
          Suspendisse potenti. Nunc vitae suscipit leo. Cras rutrum tempor cursus. Morbi interdum libero ac volutpat
          efficitur. Vestibulum turpis turpis, euismod at augue id, condimentum sollicitudin ligula. Mauris a nisl ac nisl
          malesuada viverra a non justo. Donec et turpis placerat, congue nunc id, auctor sem. Sed placerat turpis a risus
          dapibus ullamcorper non ut nisl. Nunc ornare lorem sem, et egestas mauris cursus id. Donec gravida lorem eros,
          in vulputate velit blandit ac. Pellentesque congue elementum ante id fringilla. Aliquam erat volutpat.
        </p>
        <p>
          Donec non erat vitae leo ultrices cursus. Vivamus consequat leo vitae feugiat porta. Pellentesque maximus
          consequat nulla sed aliquet. Integer volutpat purus vitae odio ullamcorper, mattis feugiat sem ullamcorper.
          Nullam tempus sem imperdiet, accumsan nisl quis, pellentesque lacus. Donec vestibulum ultricies eros, eu
          pellentesque eros auctor vel. Sed vehicula dui lorem, ut luctus metus mattis efficitur.
        </p>
        <p>
          Morbi vel fermentum nibh, et vestibulum odio. Quisque quis dolor sit amet tortor pellentesque pretium sit amet
          non mauris. Nullam cursus felis vel rutrum dapibus. Sed non iaculis diam, ac ultricies turpis. Quisque porttitor
          ullamcorper nulla id malesuada. Phasellus ac neque ut metus elementum suscipit at ac neque. Fusce auctor auctor
          ex id pretium. Nunc ultricies egestas tincidunt. Aliquam blandit lorem non nibh tristique vestibulum.
        </p>
        <p>
          Sed eu nulla id turpis ullamcorper mattis eget at massa. Sed congue tortor sit amet leo sodales facilisis.
          Vestibulum ultricies at metus non gravida. Ut lorem odio, aliquam sit amet faucibus vitae, facilisis posuere
          odio. Sed sollicitudin velit sit amet libero porta venenatis. Integer sagittis quam sed porta scelerisque.
          Phasellus scelerisque efficitur tellus sit amet posuere. Praesent laoreet congue odio, ut tempus massa porttitor
          id. Vivamus sapien arcu, consectetur a aliquet ac, ullamcorper ut risus. Quisque placerat feugiat finibus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </section>

    </main>
    <footer class="flex flex-row bg-andalucia-green-light text-white p-4 fixed bottom-0 w-full z-10">
      <p class="" id="countdown"></p>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initializeCountdown();
  },
  methods: {
    initializeCountdown() {
      const electionDate = new Date('2024-02-18').getTime();
      const countdownElement = document.getElementById('countdown');

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = electionDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
          clearInterval(interval);
          countdownElement.innerText = '¡Ha llegado el día de las elecciones!';
        }
      }, 1000);
    }
  }
}
</script>

<style>
html,
body {
  /* Estilos para el body y el html */
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#__nuxt {
  /* Estilos para el contenedor de la aplicación */
  width: 100%;
  height: 100%;
}

p {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>