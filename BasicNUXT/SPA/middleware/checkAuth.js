export default function( { store, redirect } ) {
    const auth = store.state.auth.auth;
    if (!auth) redirect('/')
}