<template>
  <div class="jumbotron vertical-center">
    <div class="container">
      <!-- bootwatch CDN https://www.bootstrapcdn.com/bootswatch/ -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sketchy/bootstrap.min.css"
        integrity="sha384-RxqHG2ilm4r6aFRpGmBbGTjsqwfqHOKy1ArsMhHusnRO47jcGqpIQqlQK/kmGy9R"
        crossorigin="anonymous"
      />
      <div class="row">
        <div class="col-sm-12">
          <h1
            class="text-center bg-primary text-white"
            style="border-radius: 10px"
          >
            Games Library 🕹️
          </h1>
          <hr />
          <br />
          <!-- Alert Message -->
          <button type="button" class="btn btn-success btn-sm">Add Game</button>
          <br /><br />
          <table class="table table-hover">
            <!-- Table Head -->
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Played?</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(game, index) in games" :key="index" :game="game">
                <td>{{ game["title"] }}</td>
                <td>{{ game["genre"] }}</td>
                <td>
                  <span v-if="game['played']">Yes</span>
                  <span v-else>No</span>
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-info btn-sm">
                      Update
                    </button>
                    <button type="button" class="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <footer
            class="bg-primary text-white text-center"
            style="border-radius: 10px"
          >
            Copyright &copy;. All rights Reserved 2011.
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "vShark",
  setup() {
    const games = ref([]);

    const getGames = () => {
      // const path = "http://127.0.0.1:1337/games";
      const path =
        "https://42302363-8b3c-4ca6-8429-556336a21d4d.mock.pstmn.io/games";
      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
          games.value = res.data.games;
        })
        .catch((err) => {
          console.error(err);
        });
    };

    onMounted(() => {
      getGames();
    });

    return {
      games,
    };
  },
});
</script>

<!-- <script>
import axios from "axios";
export default {
  data() {
    return {
      games: [],
    };
  },

  methods: {
    getGames() {
      const path =
        "https://42302363-8b3c-4ca6-8429-556336a21d4d.mock.pstmn.io/games";
      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
          this.games = res.data.games;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.getGames();
  },
};
</script> -->
