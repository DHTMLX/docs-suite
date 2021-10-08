import React from 'react';

import cssstyles from './styles.module.scss';

const WidgetIcons = ({ children }) => {
    return (
        <div className={cssstyles.suite_components_small}>
            <div className={cssstyles.suite_component_small}>
                <a href="calendar/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#calendar" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="calendar">
                                            <path d="M40,44H6c-2.2,0-4-1.8-4-4V6c0-2.2,1.8-4,4-4h4V0h2v2h22V0h2v2h4c2.2,0,4,1.8,4,4v34C44,42.2,42.2,44,40,44z M42,6c0-1.1-0.9-2-2-2h-4v2h-2V4H12v2h-2V4H6C4.9,4,4,4.9,4,6v6h38V6z M42,14H4v26c0,1.1,0.9,2,2,2h34c1.1,0,2-0.9,2-2V14z M38,38 H8c-1.1,0-2-0.9-2-2v-4v-2v-4v-2v-4c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v4v2v4v2v4C40,37.1,39.1,38,38,38z M32,36h6v-4h-6V36z M24,36h6v-4h-6V36z M30,30v-4h-6v4H30z M16,36h6v-4h-6V36z M22,30v-4h-6v4H22z M8,36h6v-4H8V36z M8,30h6v-4H8V30z M8,20v4h6v-4H8z M16,20v4h6v-4H16z M24,20v4h6v-4H24z M38,20h-6v4h6V20z M32,26v4h6v-4H32z"></path>
                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Calendar</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="chart/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#chart" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="chart">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM34,38H32a2,2,0,0,1-2-2V24a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V36A2,2,0,0,1,34,38Zm0-13a1,1,0,1,0-2,0V35a1,1,0,1,0,2,0V25ZM24,38H22a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V36A2,2,0,0,1,24,38ZM24,9a1,1,0,0,0-2,0V35a1,1,0,1,0,2,0V9ZM14,38H12a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V36A2,2,0,0,1,14,38Zm0-20a1,1,0,0,0-2,0V35a1,1,0,1,0,2,0V18Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Chart</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="colorpicker/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#colorpicker" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="colorpicker">
                                            <path d="M37.295,32.113c-6.154,7.947-18.211,11.894-22.18,11.894S2.008,43.826,2.008,38.06s8.066-4.679,8.066-8.92S4.024,26.7,4.024,21.211c0-4.749,2.527-9.368,9.074-13.876A33.554,33.554,0,0,1,31.233,1.989h0V3.972A31.455,31.455,0,0,0,14.255,8.958c-5.527,3.806-8.214,7.814-8.214,12.252,0,1.707.694,2.054,2.214,2.814s3.835,1.916,3.835,5.115-2.719,4.5-4.7,5.447C5,35.73,4.024,36.364,4.024,38.06c0,2.631,3.731,3.965,11.09,3.965,3.58,0,14.9-3.781,20.576-11.112,5.063-6.538,7.687-15.8,6.1-21.539A5.787,5.787,0,0,0,38.543,5.2a19.819,19.819,0,0,0-7.308-1.231V1.989A21.784,21.784,0,0,1,39.311,3.37C46.991,6.481,45.313,21.759,37.295,32.113ZM34,25.5A2.5,2.5,0,1,1,31.5,23,2.5,2.5,0,0,1,34,25.5Zm-3,0a0.5,0.5,0,1,0,.5-0.5A0.5,0.5,0,0,0,31,25.5ZM25.5,12A2.5,2.5,0,1,1,28,9.5,2.5,2.5,0,0,1,25.5,12Zm0-3a0.5,0.5,0,1,0,.5.5A0.5,0.5,0,0,0,25.5,9ZM17,25a5,5,0,1,1,5-5A5,5,0,0,1,17,25Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,17,17ZM15,36.5A2.5,2.5,0,1,1,12.5,34,2.5,2.5,0,0,1,15,36.5Zm-3,0a0.5,0.5,0,1,0,.5-0.5A0.5,0.5,0,0,0,12,36.5ZM23.5,30A2.5,2.5,0,1,1,21,32.5,2.5,2.5,0,0,1,23.5,30Zm0,3a0.5,0.5,0,1,0-.5-0.5A0.5,0.5,0,0,0,23.5,33ZM32,14.5A2.5,2.5,0,1,1,34.5,17,2.5,2.5,0,0,1,32,14.5ZM34.5,15a0.5,0.5,0,1,0-.5-0.5A0.5,0.5,0,0,0,34.5,15ZM31.235,1.989h0Z"></path>
                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>ColorPicker</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="combobox/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#combobox" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="combobox">
                                            <path d="M40,43H6a4,4,0,0,1-4-4V5A4,4,0,0,1,6,1H40a4,4,0,0,1,4,4V39A4,4,0,0,1,40,43ZM6,3A2,2,0,0,0,4,5v8H30V3H6ZM42,5a2,2,0,0,0-2-2H32V13H42V5Zm0,10H4V39a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V15ZM8,33H28v2H8V33Zm0-6H28v2H8V27Zm0-6H28v2H8V21ZM38,9H36V7h2V9ZM8,9V7H26V9H8Z" transform="translate(0 1)"></path>
                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>ComboBox</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="dataview/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#dataview" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="dataview">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM35,40a5,5,0,1,1,5-5A5,5,0,0,1,35,40Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,35,32Zm0-4a5,5,0,1,1,5-5A5,5,0,0,1,35,28Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,35,20Zm0-4a5,5,0,1,1,5-5A5,5,0,0,1,35,16Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,35,8ZM23,40a5,5,0,1,1,5-5A5,5,0,0,1,23,40Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,23,32Zm0-4a5,5,0,1,1,5-5A5,5,0,0,1,23,28Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,23,20Zm0-4a5,5,0,1,1,5-5A5,5,0,0,1,23,16Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,23,8ZM11,40a5,5,0,1,1,5-5A5,5,0,0,1,11,40Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,11,32Zm0-4a5,5,0,1,1,5-5A5,5,0,0,1,11,28Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,11,20Zm0-4a5,5,0,1,1,5-5A5,5,0,0,1,11,16Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,11,8Z"></path>
                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>DataView</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="form/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#form" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="form">
                                            <path d="M40,43H6a4,4,0,0,1-4-4V5A4,4,0,0,1,6,1H40a4,4,0,0,1,4,4V39A4,4,0,0,1,40,43ZM42,5a2,2,0,0,0-2-2H6A2,2,0,0,0,4,5V39a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V5ZM34,35H12a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H34a2,2,0,0,1,2,2v2A2,2,0,0,1,34,35Zm0-4H12v2H34V31Zm0-6H20a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H34a2,2,0,0,1,2,2v2A2,2,0,0,1,34,25Zm0-4H20v2H34V21Zm0-6H20a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2H34a2,2,0,0,1,2,2v2A2,2,0,0,1,34,15Zm0-4H20v2H34V11ZM14,25H12a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v2A2,2,0,0,1,14,25Zm0-4H12v2h2V21Zm-2.056-6.158a0.892,0.892,0,0,1-.653.158H11.26a0.846,0.846,0,0,1-.664-0.2L8.231,12.308a0.8,0.8,0,0,1,.088-1.2,0.968,0.968,0,0,1,1.3.095l1.716,1.847,4.072-3.812a0.967,0.967,0,0,1,1.305,0,0.827,0.827,0,0,1,0,1.224Z" transform="translate(0 1)"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Form</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="grid/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#grid" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="grid">
                                            <path d="M40,43H6a4,4,0,0,1-4-4V5A4,4,0,0,1,6,1H40a4,4,0,0,1,4,4V39A4,4,0,0,1,40,43ZM24,23v8h8V23H24Zm8-2V13H24v8h8ZM24,33v8h8V33H24ZM14,41h8V33H14v8Zm0-10h8V23H14v8Zm0-10h8V13H14v8ZM4,39a2,2,0,0,0,2,2h6V33H4v6Zm0-8h8V23H4v8ZM4,21h8V13H4v8ZM42,5a2,2,0,0,0-2-2H6A2,2,0,0,0,4,5v6H42V5Zm0,8H34v8h8V13Zm0,10H34v8h8V23Zm0,10H34v8h6a2,2,0,0,0,2-2V33Z" transform="translate(0 1)"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Grid</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="layout/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#layout" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="layout">
                                            <path d="M40,43H6a4,4,0,0,1-4-4V5A4,4,0,0,1,6,1H40a4,4,0,0,1,4,4V39A4,4,0,0,1,40,43ZM42,5a2,2,0,0,0-2-2H6A2,2,0,0,0,4,5V39a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V5ZM36,37H24a2,2,0,0,1-2-2V19a2,2,0,0,1,2-2H36a2,2,0,0,1,2,2V35A2,2,0,0,1,36,37Zm0-18H24V35H36V19Zm0-4H10a2,2,0,0,1-2-2V9a2,2,0,0,1,2-2H36a2,2,0,0,1,2,2v4A2,2,0,0,1,36,15Zm0-6H10v4H36V9ZM10,17h8a2,2,0,0,1,2,2V35a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V19A2,2,0,0,1,10,17Zm0,18h8V19H10V35Z" transform="translate(0 1)"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Layout</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="list/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#list" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="list">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM10,34H36v2H10V34Zm0-6H36v2H10V28Zm0-6H36v2H10V22Zm0-6H36v2H10V16Zm0-6H36v2H10V10Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>List</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="menu/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#menu" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="menu">
                                            <path d="M40,44H18a4,4,0,0,1-4-4V14H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM6,4A2,2,0,0,0,4,6v4a2,2,0,0,0,2,2h8V4H6ZM42,6a2,2,0,0,0-2-2H16v8H42V6Zm0,8H16V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V14ZM20,36H38v2H20V36Zm0-6H38v2H20V30Zm0-6H38v2H20V24Zm0-6H38v2H20V18Zm18-8H20V8H38v2Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Menu</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="message/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#message" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="message">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM33,33.328L32,38l-4.605-2.451a14.844,14.844,0,0,1-2.395.2c-3.851,0-5.619-.422-8-2.75,0.392,0.022,1.1,0,1.5,0,0.558,0,.955.044,1.5,0,1.879,1.294,2.41,1,5,1a12.641,12.641,0,0,0,2.587-.275L31,36V32.456A10.039,10.039,0,0,0,36,24a7.391,7.391,0,0,0-2.151-5.126A12.969,12.969,0,0,0,34,17c0-.291-0.032-0.575-0.051-0.861A9.994,9.994,0,0,1,38,24,11.575,11.575,0,0,1,33,33.328ZM20,31a14.46,14.46,0,0,1-2.363-.263L12,34V28.328A12.155,12.155,0,0,1,8,19C8,12.718,12.81,8,20,8c5.977,0,12,4.718,12,11A11.864,11.864,0,0,1,20,31Zm0-21c-6.247,0-10,3.754-10,9a11,11,0,0,0,4,8.456V31l3.413-2.275A12.642,12.642,0,0,0,20,29,9.822,9.822,0,0,0,30,19C30,13.754,24.973,10,20,10Zm4,9a2,2,0,1,1,2,2A2,2,0,0,1,24,19Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,20,21Zm-6,0a2,2,0,1,1,2-2A2,2,0,0,1,14,21Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Message</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="pagination/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#pagination" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="pagination">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 44H6a4 4 0 01-4-4V6a4 4 0 014-4h34a4 4 0 014 4v34a4 4 0 01-4 4zM4.586 4.586A2 2 0 016 4h34a2 2 0 012 2v20H4V6a2 2 0 01.586-1.414zM4 28h38v12a2 2 0 01-2 2H6a2 2 0 01-2-2V28zm2.206 7.087a.517.517 0 000 .826l3.981 2.985c.336.252.813.01.813-.413v-5.97a.509.509 0 00-.813-.413l-3.981 2.985zM15.486 39H17v-7h-.139L14 33.063v1.23l1.487-.466V39zM20 39h5v-1.232h-2.739l.899-1.029c.478-.474.823-.851 1.037-1.132.217-.285.376-.555.478-.81.102-.26.153-.525.153-.797 0-.645-.204-1.139-.612-1.483-.405-.345-.983-.517-1.735-.517a2.66 2.66 0 00-1.272.303c-.379.203-.675.484-.889.844a2.24 2.24 0 00-.32 1.17h1.616c0-.31.076-.567.23-.772a.709.709 0 01.597-.313c.248 0 .438.078.569.233.13.154.195.38.195.677 0 .367-.275.861-.826 1.484L20 37.957V39zm8.654-4.157h.752c.595 0 .893-.288.893-.865a.736.736 0 00-.213-.547c-.142-.143-.342-.215-.6-.215a.88.88 0 00-.553.182c-.154.122-.34.421-.34.602H27c0-.358.21-.826.411-1.107.202-.28.48-.499.837-.654.359-.16.753-.239 1.181-.239.766 0 1.368.173 1.805.519.438.346.657.822.657 1.426 0 .293-.091.57-.274.833-.18.258-.443.469-.789.63.365.132.652.331.86.6.208.264.312.593.312.986 0 .608-.236 1.094-.709 1.459S30.198 39 29.43 39c-.45 0-.87-.084-1.257-.252-.384-.172-.676-.407-.874-.707A1.833 1.833 0 0127 37.013h1.602c0 .209.085.39.255.542.17.153.38.23.629.23.28 0 .504-.077.67-.23a.777.777 0 00.251-.594c0-.343-.086-.586-.26-.73-.173-.143-.412-.214-.718-.214h-.775v-1.174zm11.14.244a.517.517 0 010 .826l-3.981 2.985a.509.509 0 01-.813-.413v-5.97c0-.422.477-.665.813-.413l3.981 2.985z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Pagination</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="popup/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#popup" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="popup">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM36,40H10a4,4,0,0,1-4-4V10a4,4,0,0,1,4-4H36a4,4,0,0,1,4,4V36A4,4,0,0,1,36,40Zm2-30a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2V36a2,2,0,0,0,2,2H36a2,2,0,0,0,2-2V10ZM35,21a1,1,0,0,1-1-1l0.032-6.575-6.788,6.787L25.83,18.8l6.8-6.8H26a1,1,0,0,1,0-2h8.972a0.994,0.994,0,0,1,.712.3A0.894,0.894,0,0,1,36,11v9A1,1,0,0,1,35,21ZM20,36H11.028a1,1,0,0,1-.712-0.3A0.893,0.893,0,0,1,10,35V26a1,1,0,0,1,2,0l-0.032,6.575,6.788-6.787L20.17,27.2l-6.8,6.8H20A1,1,0,0,1,20,36Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Popup</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="ribbon/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#ribbon" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="ribbon">
                                            <path d="M12,28h4c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2C10,27.1,10.9,28,12,28z M12,24h4v2h-4V24z M18,31h-8v-2h8V31z M20,6H8C6.9,6,6,6.9,6,8v26c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,34H8V8h12V34z M6,38h16v2H6V38zM12,16h4c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v2C10,15.1,10.9,16,12,16z M12,12h4v2h-4V12z M18,19h-8v-2h8V19zM24,38h16v2H24V38z M42.8,3.2C42.1,2.4,41.1,2,40,2H6C4.9,2,3.9,2.4,3.2,3.2S2,4.9,2,6v34c0,1.1,0.4,2.1,1.2,2.8C3.9,43.6,4.9,44,6,44h34c1.1,0,2.1-0.4,2.8-1.2c0.8-0.8,1.2-1.8,1.2-2.8V6C44,4.9,43.6,3.9,42.8,3.2z M42,40c0,0.5-0.2,1-0.6,1.4C41,41.8,40.5,42,40,42H6c-0.5,0-1-0.2-1.4-0.6C4.2,41,4,40.5,4,40V6c0-0.5,0.2-1,0.6-1.4C5,4.2,5.5,4,6,4h34c0.5,0,1,0.2,1.4,0.6C41.8,5,42,5.5,42,6V40z M38,6H26c-1.1,0-2,0.9-2,2v26c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C40,6.9,39.1,6,38,6z M38,34H26V8h12V34z M36,31h-8v-2h8V31z M36,19h-8v-2h8V19z M36,13h-8v-2h8V13z M36,25h-8v-2h8V25z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Ribbon</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="sidebar/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#sidebar" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="sidebar">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM4,40a2,2,0,0,0,2,2H18V16H4V40ZM4,6v8H18V4H6A2,2,0,0,0,4,6ZM42,6a2,2,0,0,0-2-2H20V42H40a2,2,0,0,0,2-2V6ZM15.5,12h-7A0.5,0.5,0,0,1,8,11.5v-1A0.5,0.5,0,0,1,8.5,10h7a0.5,0.5,0,0,1,.5.5v1A0.5,0.5,0,0,1,15.5,12Zm0,24h-7A0.5,0.5,0,0,1,8,35.5v-1A0.5,0.5,0,0,1,8.5,34h7a0.5,0.5,0,0,1,.5.5v1A0.5,0.5,0,0,1,15.5,36Zm0-6h-7A0.5,0.5,0,0,1,8,29.5v-1A0.5,0.5,0,0,1,8.5,28h7a0.5,0.5,0,0,1,.5.5v1A0.5,0.5,0,0,1,15.5,30Zm0-6h-7A0.5,0.5,0,0,1,8,23.5v-1A0.5,0.5,0,0,1,8.5,22h7a0.5,0.5,0,0,1,.5.5v1A0.5,0.5,0,0,1,15.5,24Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Sidebar</span>
                        </span>
                    </span>
                </a>
            </div>


            <div className={cssstyles.suite_component_small}>
                <a href="slider/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#slider" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="slider">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM36,26H25v2a2,2,0,0,1-4,0V26H10a2,2,0,0,1-2-2V18a2,2,0,0,1,2-2H21V14a2,2,0,0,1,4,0v2H36a2,2,0,0,1,2,2v6A2,2,0,0,1,36,26ZM21,22H14V20h7V18H12c-1.994,0-2,.056-2,2v2c0,2-.064,2,2,2h9V22Zm15-2c0-1.978-.037-1.967-2-2H25v2h7v2H25v2h9c2,0,2,0,2-2V20ZM10,30H8V28h2v2Zm28,0H36V28h2v2Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Slider</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="tabbar/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#tabbar" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="tabbar">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H24V8a2,2,0,0,0,2,2H42V6Zm0,6H26a4,4,0,0,1-4-4V4H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V12ZM8,36H38v2H8V36Zm0-6H38v2H8V30Zm0-6H38v2H8V24Zm0-6H38v2H8V18Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Tabbar</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="timepicker/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#timepicker" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="timepicker">
                                            <path d="M42.8,3.2C42.1,2.4,41.1,2,40,2H6C4.9,2,3.9,2.4,3.2,3.2S2,4.9,2,6v34c0,1.1,0.4,2.1,1.2,2.8C3.9,43.6,4.9,44,6,44h34
                                        c1.1,0,2.1-0.4,2.8-1.2c0.8-0.8,1.2-1.8,1.2-2.8V6C44,4.9,43.6,3.9,42.8,3.2z M42,40c0,0.5-0.2,1-0.6,1.4C41,41.8,40.5,42,40,42H6
                                        c-0.5,0-1-0.2-1.4-0.6C4.2,41,4,40.5,4,40V6c0-0.5,0.2-1,0.6-1.4C5,4.2,5.5,4,6,4h34c0.5,0,1,0.2,1.4,0.6C41.8,5,42,5.5,42,6V40z"></path>
                                            <polygon points="27,18 27,16 24,16 24,12 22,12 22,18 24,18 	"></polygon>
                                            <path d="M23,26c5,0,9-4,9-9s-4-9-9-9s-9,4-9,9S18,26,23,26z M23,10c3.9,0,7,3.1,7,7s-3.1,7-7,7s-7-3.1-7-7S19.1,10,23,10z"></path>
                                            <path d="M15,35c-0.7,0-1.4,0.4-1.7,1H8v2h5.3c0.3,0.6,1,1,1.7,1s1.4-0.4,1.7-1H38v-2H16.7C16.4,35.4,15.7,35,15,35z"></path>
                                            <path d="M29,29c-0.7,0-1.4,0.4-1.7,1H8v2h19.3c0.3,0.6,1,1,1.7,1s1.4-0.4,1.7-1H38v-2h-7.3C30.4,29.4,29.7,29,29,29z"></path>                                       </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>TimePicker</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="toolbar/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#toolbar" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="toolbar">
                                            <path d="M40,16H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4v6A4,4,0,0,1,40,16ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6Zm-7,6a3,3,0,1,1,3-3A3,3,0,0,1,35,12Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,35,8ZM23,12a3,3,0,1,1,3-3A3,3,0,0,1,23,12Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,8ZM11,12a3,3,0,1,1,3-3A3,3,0,0,1,11,12Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,11,8ZM10,22H8V20h2v2Zm0,6H8V26h2v2Zm0,6H8V32h2v2Zm0,6H8V38h2v2ZM40,22H14V20H40v2Zm0,6H14V26H40v2Zm0,6H14V32H40v2Zm0,6H14V38H40v2Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Toolbar</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="tree/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#tree" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="tree">
                                            <path d="M42,43H34a2,2,0,0,1-2-2V39H26v2a2,2,0,0,1-2,2H16a2,2,0,0,1-2-2V39H6V11H4A2,2,0,0,1,2,9V3A2,2,0,0,1,4,1h8a2,2,0,0,1,2,2V9a2,2,0,0,1-2,2H8V21h6V19a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H16a2,2,0,0,1-2-2V23H8V37h6V35a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v2h6V35a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v6A2,2,0,0,1,42,43ZM12,9V3H4V9h8Zm4,16h8V19H16v6Zm8,10H16v6h8V35Zm18,0H34v6h8V35Z" transform="translate(0 1)"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Tree</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="treegrid/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#treegrid" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="treegrid">
                                            <path d="M40,44H22a4,4,0,0,1-4-4V26H6V10H4A2,2,0,0,1,2,8V4A2,2,0,0,1,4,2h6a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H8v1H18V10a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2H20a2,2,0,0,1-2-2V13H8V24H18V22a4,4,0,0,1,4-4H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM10,8V4H4V8h6Zm10,6h6V10H20v4ZM32,42h4V38H32v4Zm0-6h4V32H32v4Zm0-6h4V26H32v4ZM26,42h4V38H26v4Zm0-6h4V32H26v4Zm0-6h4V26H26v4ZM20,40a2,2,0,0,0,2,2h2V38H20v2Zm0-4h4V32H20v4Zm0-6h4V26H20v4Zm22-8a2,2,0,0,0-2-2H22a2,2,0,0,0-2,2v2H42V22Zm0,4H38v4h4V26Zm0,6H38v4h4V32Zm0,6H38v4h2a2,2,0,0,0,2-2V38Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>TreeGrid</span>
                        </span>
                    </span>
                </a>
            </div>

            <div className={cssstyles.suite_component_small}>
                <a href="window/index/" title="" className={cssstyles.suite_component__item}>
                    <span className={cssstyles.suite_component__box}>
                        <span className={cssstyles.suite_component__content}>
                            <span className={cssstyles.suite_component__icon}>
                                <svg viewBox="0 0 46 46" className={cssstyles.suite_component__icon_svg}>
                                    <use xmlnsXlinkk="http://www.w3.org/1999/xlink" xlinkHref="#window" className={cssstyles.suite_component__icon_use}>
                                        <svg viewBox="0 0 46 46" id="window">
                                            <path d="M40,44H6a4,4,0,0,1-4-4V6A4,4,0,0,1,6,2H40a4,4,0,0,1,4,4V40A4,4,0,0,1,40,44ZM42,6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V40a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6ZM34,30H20a4,4,0,0,1-4-4V12a4,4,0,0,1,4-4H34a4,4,0,0,1,4,4V26A4,4,0,0,1,34,30Zm2-18a2,2,0,0,0-2-2H20a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H34a2,2,0,0,0,2-2V12ZM12,36H26a2,2,0,0,0,2-2h2a4,4,0,0,1-4,4H12a4,4,0,0,1-4-4V20a4,4,0,0,1,4-4v2a2,2,0,0,0-2,2V34A2,2,0,0,0,12,36Z"></path>                                        </svg>
                                    </use>
                                </svg>
                            </span>
                            <span className={cssstyles.suite_components__name}>Window</span>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default WidgetIcons;