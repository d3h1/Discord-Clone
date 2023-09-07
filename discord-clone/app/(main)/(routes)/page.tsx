import { UserButton } from "@clerk/nextjs"

const Home = () => {
  return (
    <div>
      {/* We only want logged in users to access this page */}
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  )
}

export default Home
