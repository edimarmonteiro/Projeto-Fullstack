
export default function Altetication () {
    return(
        <div>
      <h1 className='text-2xl'>Hello World</h1>
      <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      >
        <p>
          <span>
            Crie sua conta
          </span>
        </p>
      </a>
    </div>
    )
}