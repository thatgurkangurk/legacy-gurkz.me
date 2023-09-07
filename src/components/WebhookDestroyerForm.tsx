import { createSignal } from "solid-js"

export function WebhookForm() {
    const [webhook, setWebhook] = createSignal<string>("");
    const [isDeleting, setIsDeleting] = createSignal(false);

    const isWebhookUrlValid = (url: string) => {
        return url.startsWith(
            "https://discord.com/api/webhooks/" ||
            "https://canary.discord.com/api/webhooks/" ||
            "https://ptb.discord.com/api/webhooks/"
        )
    }

    const resetForm = (errorMessage?: string) => {
        setWebhook("");
        setIsDeleting(false);
        if (errorMessage) return alert(errorMessage);
    }

    const deleteWebhook = (res: void | Response) => {
        if (!res) return resetForm("Something went wrong. Please try again.")

        if (res.status === 204) return resetForm("Webhook was sucessfully deleted")

        resetForm("Webhook does not exist!");
    }

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        if (!isWebhookUrlValid(webhook())) {
            alert("Please enter a valid Discord webhook URL!");
            setWebhook("");
            return;
        }

        setIsDeleting(true);


        fetch(webhook(), {
            method: "DELETE"
        })
            .catch(resetForm)
            .then(deleteWebhook)
    }
    return (
        <form class="pt-2" onSubmit={handleSubmit}>
            <label
                for="webhook"
                class="block mb-2 text-left text-sm font-medium text-gray-400"
            >
                webhook url
            </label>
            <input id="webhook"
                required
                type="url"
                placeholder="https://discord.com/api/webhooks/..."
                onInput={(e) => setWebhook(e.currentTarget.value)}
                value={webhook()}
                class="block p-3 w-full rounded-md text-sm bg-gray-700 border-gray-600 outline-none focus:outline-2 focus:outline-blue-600 mb-4"
            />
            <button
                disabled={isDeleting()}
                type="submit"
                id="btn"
                class="bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
            >
                {isDeleting() ? "deleting..." : "delete"}
            </button>
        </form>
    )
}