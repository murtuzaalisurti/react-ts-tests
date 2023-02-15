module.exports = {
    jest: {
        configure: {
            collectCoverage: true,
            collectCoverageFrom: [
                "/src/**/*.{js,ts,tsx,jsx}"
            ],
            resetMocks: true
        }
    }
}