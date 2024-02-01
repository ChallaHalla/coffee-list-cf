import Image from "next/image"

export default function Home() {

  async function submit(formData: FormData) {
    'use server'
    console.log(formData, "submitted")
    console.log(formData.get("email"))
  }
  return (
    <>
      <h1 id="landing-page-title"> Coffee List NYC </h1>
      <Image
        src="/pourover.svg"
        id="pour-over"
        width={500}
        height={500}
        alt="Pour over coffee drawing"
      />
      <div id="description-container"> 
        <p id="email-list-description"> 
          Join our community of coffee enthusiasts! Sign up to unlock curated lists of top-notch pour overs, exquisite espresso drinks, and more. Elevate your coffee experience by gaining access to rankings based on the quality of each specific category. Let&apos;s savor the difference together – one pour over at a time. Sign up now and be part of the journey!
        </p>
        <form action={submit}>
          <input type="text" name="email"/> 
          <button type="submit"> submit </button>
        </form>
      </div>
    </>
  )
}
