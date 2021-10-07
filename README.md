# FactorioRatioEngine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

This is a calculator for computing the requirements of arbitrary production rates in the strategy game Factorio. It uses item recipe data scraped from the Factorio wiki by https://github.com/peckben1, parsing his CSV into JSON. 

Factorio is a factory-building game in which machines are used to fabricate items. Each item type has its own recipe and time requirements, an item's recipe often includes several different components, and components are themselves items with their own recipes and processing requirements, often nesting several layers deep. Because of this, understanding the actual infrastructure and material costs of manufacturing a particular item can be a complex and time-consuming series of calculations. This app exists to automate every form of this process, allowing the player to focus on strategy.
