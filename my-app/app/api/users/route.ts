export function GET () {
    return new Response(JSON.stringify({
        data: {
            test: "dsadassda"
        }
    }), {
        status: 200
    })
}