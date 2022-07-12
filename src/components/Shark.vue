<template>
  <div>
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>

<!-- <script>
import axios from "axios";

export default {
  name: "vShark",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getResponse() {
      const path = "http://127.0.0.1:1337/shark";
      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
          this.msg = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getResponse();
  },
};
</script> -->

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "vShark",
  setup() {
    const msg = ref("");

    const getResponse = () => {
      const path = "http://127.0.0.1:1337/shark";
      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
          msg.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    onMounted(() => {
      getResponse();
    });

    return {
      msg,
    };
  },
});
</script>
