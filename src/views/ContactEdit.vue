<template>
  <div v-if="contact" class="page">
    <h4>Hiệu chỉnh Liên hệ</h4>
    <ContactForm
      :contact="contact"
      @submit:contact="updateContact"
      @delete:contact="deleteContact"
    />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactForm,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: null,
      message: "",
    };
  },
  methods: {
    async getContact(id) {
      try {
        this.contact = await ContactService.get(id);
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "NotFound",
          params: {
            patchMatch: this.$router.patch.split("/").slice(1),
          },
          query: this.$router.query,
          hash: this.$router.hash,
        });
      }
    },
    async updateContact(data) {
      try {
        await ContactService.update(this.contact.id, data);
        this.$router.push({ name: "ContactBook" });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteContact(id) {
      try {
        await ContactService.delete(this.contact.id);
        // sau khi xóa chuyển về trang chủ
        this.$router.push({ name: "ContactBook" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getContact(this.id);
    this.message = "";
  },
};
</script>
<style scoped>
.page {
  max-width: 400px;
}
</style>
