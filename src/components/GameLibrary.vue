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
          <b-alert variant="success" v-if="showMessage" show>
            {{ message }}
          </b-alert>
          <!-- Add Game button -->
          <!-- <b-button v-b-modal="'game-modal'"> Add Game </b-button> -->
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
      <!-- First model -->
      <b-modal
        ref="addGameModal"
        id="game-modal"
        title="Add a new game"
        hide-backdrop
        hide-footer
      >
        <b-form @submit="onSubmit" @reset="onReset" class="w-100">
          <b-form-group
            id="form-title-group"
            label="Title: "
            label-for="form-title-input"
          >
            <b-form-input
              id="form-title-input"
              type="text"
              v-model="addGameForm.title"
              required
              placeholder="Enter game"
            ></b-form-input>
          </b-form-group>
          <!-- Form group for genre entry -->
          <b-form-group
            id="form-genre-group"
            label="Genre: "
            label-for="form-genre-input"
          >
            <b-form-input
              id="form-genre-input"
              type="text"
              v-model="addGameForm.genre"
              required
              placeholder="Enter genre"
            ></b-form-input>
          </b-form-group>
          <!-- Checkbox -->
          <b-form-group id="form-played-group">
            <b-form-checkbox-group
              v-model="addGameForm.played"
              id="form-checks"
            >
              <b-form-checkbox value="true"> Played? </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <!-- Buttons: submit and reset -->
          <b-button-group>
            <b-button type="submit" variant="outline-info">Submit</b-button>
            <b-button type="reset" variant="outline-danger">Reset</b-button>
          </b-button-group>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "GameLibrary",
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
</script> -->

<script>
import axios from "axios";
export default {
  name: "vGames",
  data() {
    return {
      games: [],
      addGameForm: {
        title: "",
        genre: "",
        played: [],
      },
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

    addGame(payload) {
      const path =
        "https://42302363-8b3c-4ca6-8429-556336a21d4d.mock.pstmn.io/games";
      axios
        .post(path, payload)
        .then(() => {
          this.getGames();
        })
        .catch((err) => {
          console.error(err);
          this.getGames();
        });
    },

    initForm() {
      this.addGameForm.title = "";
      this.addGameForm.genre = "";
      this.addGameForm.played = [];
    },

    onSubmit(e) {
      e.preventDefault();
      this.$refs.addGameModal.hide();
      let played = false;
      if (this.addGameForm.played[0]) played = true;
      const payload = {
        title: this.addGameForm.title,
        genre: this.addGameForm.genre,
        played,
      };
      this.addGame(payload);
      this.initForm();
    },

    onReset(e) {
      e.preventDefault();
      this.$refs.addGameModal.hide();
      this.initForm();
    },
  },
  created() {
    this.getGames();
  },
};
</script>

<!-- <script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "GameLibrary",
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

    const addGame = (payload) => {
      const path =
        "https://42302363-8b3c-4ca6-8429-556336a21d4d.mock.pstmn.io/games";
      axios
        .get(path, payload)
        .then(() => {
          getGames();
        })
        .catch((err) => {
          console.error(err);
        });
    };

    const initForm = () => {
      this.addGameForm.title = "";
      this.addGameForm.genre = "";
      this.addGameForm.played = [];
    };

    function onSubmit(e) {
      e.preventDefault();
      this.$refs.addGameModal.hide();
      let played = false;

      if (this.addGameForm.played[0]) {
        played = true;
      }
      const payload = {
        title: this.addGameForm.title,
        genre: this.addGameForm.genre,
        played: played,
      };
      this.addGame(payload);
      this.initForm();
    };

    onMounted(() => {
      getGames();
    });

    return {
      games,
      addGameForm: {
        title: "",
        genre: "",
        played: [],
      },
    };
  },
});
</script> -->
