module.exports = {
    jest: {
        configure: {
            collectCoverage: true,
            collectCoverageFrom: [
                "/src/**/*.{js,ts,tsx,jsx}"
            ],
            resetMocks: true,
            // resolver: '<rootDir>/.jest/resolver.js'
            // extensionsToTreatAsEsm: ['.ts', '.tsx']
            // preset: 'ts-jest',
            // transform: {
            //     '^.+\\.(ts|tsx)?$': 'ts-jest',
            //     "^.+\\.(js|jsx)$": "babel-jest",
            // }
        }
    }
}