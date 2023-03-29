const submit = () => {
  const pokemon = document.getElementById("pokemon").value;
  if (pokemon) {
    const link = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(link)
      .then((res) => {
        if (!res.ok) {
          throw new Error(); // Will take you to the `catch` below
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("box").style.display = "flex";
        // clearing abilities div
        document.getElementById("wrap2").innerHTML = "";
        document.getElementById("name").innerHTML = data.name;
        const img = document.getElementById("img");
        img.style.backgroundImage = `url(${data.sprites.front_shiny})`;
        img.style.backgroundPosition = "center";
        img.style.backgroundSize = "cover";
        document.getElementById("hp").innerHTML = data.stats[0].base_stat;
        document.getElementById("attack").innerHTML = data.stats[1].base_stat;
        document.getElementById("defense").innerHTML = data.stats[2].base_stat;
        document.getElementById("special-attack").innerHTML =
          data.stats[3].base_stat;
        document.getElementById("special-defense").innerHTML =
          data.stats[4].base_stat;
        document.getElementById("speed").innerHTML = data.stats[5].base_stat;
        data.abilities.forEach((ability) => {
          const p = document.createElement("p");
          p.innerHTML = ability.ability.name;
          document.getElementById("wrap2").appendChild(p);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
console.log(this);
