import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path : "/",
        name : "ContactBook",
        component : ContactBook,
    },
    {
        path: "/contacts/:id",
        name: "EditContact",
        component: () => import("@/views/ContactEdit.vue"),
        props: true 
    },
    {
        path: "/contacts/",
        name: "AddContact",
        component: () => import("@/views/ContactAdd.vue"),
        props: true 
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;