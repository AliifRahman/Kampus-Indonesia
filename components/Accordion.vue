<template>
    <div class="accordion-inner">
        <b-card no-body class="accordion-item">
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="accordion-button">
                   1. Apa itu Kampus Indonesia?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body class="accordion-item">
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="accordion-button">
                    2. Mengapa Harus Kampus indonesia ?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="accordion-button">
                    3. Another question here?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>