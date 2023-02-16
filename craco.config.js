module.exports = {
    jest: {
        configure: {
            collectCoverage: true,
            collectCoverageFrom: [
                "/src/**/*.{js,ts,tsx,jsx}"
            ],
            resetMocks: true,
            preset: 'ts-jest',
            transform: {
                '^.+\\.(ts|tsx)?$': 'ts-jest',
                "^.+\\.(js|jsx)$": "babel-jest",
            }
        }
    }
}