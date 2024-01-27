<script lang="ts">
  import type {
    ContactFormResponse,
    ContactFormRequest,
  } from "@/types/contactForm";

  let { class: className } = $props<{ class: string }>();

  let isLoading = $state<boolean>(false);

  let responseMessage = $state<ContactFormResponse>({
    color: "",
    message: "",
  });

  let requestData = $state<ContactFormRequest>({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    isLoading = true;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.status === 200 || response.status === 400) {
        responseMessage = (await response.json()) as ContactFormResponse;
      } else {
        responseMessage.message =
          "⚠️ Ha habido un error enviando los datos del formulario. Inténtalo más tarde.";
        responseMessage.color = "#fb0";
      }
    } catch (_) {
      responseMessage.message =
        "⚠️ Ha habido un error enviando los datos del formulario. Inténtalo más tarde.";
      responseMessage.color = "#fb0";
    } finally {
      isLoading = false;
    }
  }
</script>

<form
  on:submit={handleSubmit}
  class={`${className} flex flex-col gap-4 dark:text-white`}
  id="contact-form"
>
  <label for="name" class="flex flex-col gap-1">
    Nombre
    <input
      bind:value={requestData.name}
      type="text"
      name="name"
      class="dark:bg-opacity-5 bg-white rounded border border-[#a5c9ca] shadow focus:outline-none p-1"
    />
  </label>

  <label for="mail" class="flex flex-col gap-1">
    Correo
    <input
      type="email"
      name="email"
      class="dark:bg-opacity-5 bg-white rounded border border-[#a5c9ca] focus:outline-none shadow p-1"
      bind:value={requestData.email}
    />
  </label>

  <label for="message" class="flex flex-col gap-1">
    Mensaje
    <textarea
      bind:value={requestData.message}
      class="dark:bg-opacity-5 bg-white rounded border border-[#a5c9ca] focus:outline-none h-40 shadow p-1"
      name="message"
    ></textarea>
  </label>
  <input
    type="submit"
    value={isLoading ? "Enviando..." : "Enviar"}
    disabled={isLoading}
    class="w-fit place-self-center py-3 px-6 rounded border border-alt-text cursor-pointer hover:bg-opacity-10 dark:bg-white hover:bg-black hover dark:bg-opacity-10 dark:hover:bg-opacity-5"
  />
  <p
    id="form-response"
    class="font-bold"
    style="color: {responseMessage.color}"
  >
    {responseMessage.message}
  </p>
</form>
