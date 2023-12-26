import type {
  ContactFormResponse,
  ContactFormRequest,
} from "@/types/contactForm";
import type { APIRoute } from "astro";
import { sendMail } from "@/lib/mail";

function createResponse({
  message,
  color,
}: ContactFormResponse): ContactFormResponse {
  return { message, color };
}

export const POST: APIRoute = async ({ request }: { request: Request }) => {
  const { name, email, message } = (await request.json()) as ContactFormRequest;

  if (!email.match("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+")) {
    return new Response(
      JSON.stringify(
        createResponse({
          message: "El correo es inválido.",
          color: "#f90",
        })
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    await sendMail({
      to: import.meta.env.SMTP_MAIL,
      subject: `${name} ha contactado contigo.`,
      text: `Nombre: ${name}
Email: ${email}
Mensaje: ${message}`,
    });

    await sendMail({
      to: email,
      subject: "¡Gracias por contactar conmigo!",
      text: `¡Hola, ${name}!
Gracias por contactar conmigo. Te responderé lo antes posible.`,
    });

    return new Response(
      JSON.stringify(
        createResponse({
          message:
            "El formulario se ha enviado correctamente. Por favor, revisa tu carpeta de spam, en caso de que el mensaje haya sido dirigido allí.",
          color: "#0a0",
        })
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e);

    return new Response(
      JSON.stringify(
        createResponse({
          message:
            "Hubo un error enviando el formulario, vuelve a intentarlo mas tarde.",
          color: "#f90",
        })
      ),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
