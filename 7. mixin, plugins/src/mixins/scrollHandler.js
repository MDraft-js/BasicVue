export default {
    methods: {
        onScroll(event) {
            const container = event.target
            if (container.clientHeight + container.scrollTop >= container.scrollHeight) {
                this.onScrollEnd()
            }
        },
        onScrollEnd() {
            console.warn('You Must override onScrollEnd method');
        }
    }
}