<template>
  <div class="page">
    <h4>Thêm Liên hệ</h4>
    <ContactForm :contact="contact" @submit:contact="addContact" />
  </div>
</template>
<script>
import ContactForm from "../components/ContactForm.vue";
import ContactService from "../services/contact.service";
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    async addContact(data) {
      try {
        console.log(data);
        await ContactService.create(data);
        this.$router.push({ name: "ContactBook" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.page {
  max-width: 400px;
}
</style>
