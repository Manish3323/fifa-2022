<script>
  import {supabase} from "../../lib/supabase/supabaseClient"
  let loading = false
  let email;
  const handleLogin = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      loading = false
    }
  }
</script>

<form class="content" on:submit|preventDefault={handleLogin}>
  <div>
    <h1>Sign In</h1>
    <p>Magic link will be sent to your email below</p>
    <div>
      <input
        class="inputField"
        type="email"
        placeholder="Your email"
        bind:value={email}
      />
    </div>
    <div>
      <input type="submit" value={loading ? "Loading" : "Send magic link"} disabled={loading} />
    </div>
  </div>
</form>