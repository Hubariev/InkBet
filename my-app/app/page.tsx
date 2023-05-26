export default async function Home() {

  const data = await fetch('https://localhost:3000/api/users', {
    method: "GET"
  }).then((res) => res.json())

  return (
   <p>Hello YO YO!</p>
  )
}
