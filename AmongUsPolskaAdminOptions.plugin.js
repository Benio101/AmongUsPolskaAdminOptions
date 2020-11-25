/**
 * @name AmongUsPolskaAdminOptions
 * @description Dodatkowe opcje dla Administracji serwera Among Us Polska.
 * @updateUrl https://raw.githubusercontent.com/Benio101/AmongUsPolskaAdminOptions/main/AmongUsPolskaAdminOptions.plugin.js
 * @author Benio
 * @version 0.0.2
 */

module.exports = (() =>
{
	const images =
	{
		person: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><g><path d="M83.9,77.4c-2.4-13-13.7-22.5-26.9-22.5H43.3c-13.5,0-24.9,9.8-27.1,23.1v0c-1.1,6.7,4.1,12.7,10.8,12.7h46.2 c6.8,0,12-6.2,10.8-12.9L83.9,77.4z"></path><path d="M36.1,44.2c7.8,7.8,20.4,8,28.4,0.4l0.2-0.2c6.9-6.6,7.6-17.3,1.5-24.7l0,0c-8.3-10-23.7-9.8-31.7,0.4l0,0 c-5.6,7.2-5,17.5,1.5,24L36.1,44.2z"></path></g></svg>`,
		crossed_out_person: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M85.9,71.7c-0.1-2.1-0.4-4.3-0.7-6.7c-0.4-2.4-0.8-4.6-1.3-6.7c-0.5-2.1-1.3-4.1-2.2-6c-0.9-2-1.9-3.6-3.1-5 c-1.2-1.4-2.6-2.5-4.3-3.3c-1.7-0.8-3.5-1.2-5.5-1.2l0,0h0c0,0,0,0-0.1,0c0,0,0,0,0,0l-0.9,0c4.3-4.5,6.5-9.9,6.5-16.2 c0-6.5-2.3-12-6.9-16.6C62.9,5.3,57.3,3,50.8,3c-6.5,0-12,2.3-16.6,6.9c-4.6,4.6-6.9,10.1-6.9,16.6c0,6.3,2.2,11.7,6.5,16.2l-0.9,0 c0,0,0,0,0,0c0,0,0,0,0,0h-0.1l0,0c-2,0-3.9,0.4-5.5,1.2c-1.7,0.8-3.1,1.9-4.3,3.3c-1.2,1.4-2.2,3-3.1,5c-0.9,2-1.6,4-2.2,6 c-0.5,2.1-1,4.3-1.3,6.7c-0.4,2.4-0.6,4.7-0.7,6.7c-0.1,2.1-0.2,4.2-0.2,6.4c0,4.9,1.2,8.8,3.7,11.7c2.4,2.9,5.7,4.3,9.7,4.3h43.8 c4,0,7.3-1.4,9.7-4.3c2.4-2.9,3.7-6.8,3.7-11.7C86.1,75.9,86.1,73.8,85.9,71.7z M66.5,76.3c0.5,0.5,0.7,1.1,0.7,1.8 c0,0.7-0.2,1.3-0.7,1.8l-3.5,3.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-7.6-7.6l-7.6,7.6c-0.5,0.5-1.1,0.7-1.8,0.7 c-0.7,0-1.3-0.2-1.8-0.7l-3.5-3.5c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l7.6-7.6l-7.6-7.6c-0.5-0.5-0.7-1.1-0.7-1.8 c0-0.7,0.2-1.3,0.7-1.8l3.5-3.5c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l7.6,7.6l7.6-7.6c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l3.5,3.5c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8l-7.6,7.6L66.5,76.3z"></path></svg>`,
		swearing: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><path d="M45.2,51.5c0,1.7-1.4,3-3,3s-3-1.4-3-3c0-1.7,1.4-3,3-3S45.2,49.8,45.2,51.5z M43.3,31.1H41c-1.3,0-2.3,1-2.3,2.3l1.2,10.5 c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3l1.2-10.5C45.6,32.1,44.6,31.1,43.3,31.1z M95.6,46.7v30.6c0,1.3-1,2.3-2.3,2.3h-3.1v7.9 c0,2.3-3,3.2-4.2,1.3l-5.8-9c-0.1-0.1-0.1-0.2-0.1-0.2H51.7c-0.9,0-1.7-0.5-2.1-1.3l0,0L42,67.2L26.8,90c-1.4,2.1-4.7,0.7-4.2-1.8 L28,63.5l-12.7,2c-2,0.3-3.4-1.9-2.2-3.6L20,52L7.2,47.2c-2-0.7-2-3.6,0-4.3l12.7-4.9l-6.9-11c-1.1-1.7,0.5-3.9,2.5-3.5l13.2,3.1 V11.9c0-2.1,2.6-3.1,4-1.6l9.2,10.1l8.3-10c1.3-1.6,3.9-0.8,4.1,1.3l1.4,14.9l14-3.6c2.1-0.5,3.7,1.9,2.4,3.6l-8,10.7l15.3,7.2h14 C94.6,44.4,95.6,45.4,95.6,46.7z M64.9,63c0-1.7-1.4-3-3-3s-3,1.4-3,3c0,1.7,1.4,3,3,3S64.9,64.7,64.9,63z M68.5,44.4L57,39l7.4-10 l-12.9,3.4l-1.4-14.7l-8.1,9.8l-8.8-9.6v14.6l-13.4-3.2l7,11.2l-12,4.7l12.4,4.6l-7.3,10.4l14-2.2l-4.2,19.4L42,59l7.4,10.8V46.7 c0-1.3,1-2.3,2.3-2.3H68.5z M75.6,63c0-1.7-1.4-3-3-3s-3,1.4-3,3c0,1.7,1.4,3,3,3S75.6,64.7,75.6,63z M86.2,63c0-1.7-1.4-3-3-3 c-1.7,0-3,1.4-3,3c0,1.7,1.4,3,3,3C84.9,66,86.2,64.7,86.2,63z"></path></svg>`,
		trash: `<svg height='24px' width='24px' fill="#FFFF40" viewBox="0 0 25 25" x="0px" y="0px"><g data-name="Icon 1"><path d="M4.5,8h.5321L5.94,21.6558a1.5016,1.5016,0,0,0,1.496,1.4013h10.129a1.5015,1.5015,0,0,0,1.496-1.4L19.9679,8H20.5a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5H4.5a.5.5,0,0,0-.5.5v2A.5.5,0,0,0,4.5,8Zm11.42,9.2129-.707.707L12.5,15.207,9.7871,17.92l-.707-.707L11.793,14.5,9.08,11.7871l.707-.707L12.5,13.793,15.2129,11.08l.707.707L13.207,14.5Z"></path><path d="M10,3h5V4h1V2.5a.5.5,0,0,0-.5-.5h-6a.5.5,0,0,0-.5.5V4h1Z"></path></g></svg>`,
		nonsense: `<svg height='300px' width='300px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M15.4,12c-0.1,3.2-0.4,6-0.4,8.7c0,4.8,0.2,9.5,0.3,14.3c0.1,6.2,0.1,12.5,0,18.7c-0.1,2.7,0,5.3,0.1,8 c0.1,2.7-0.1,5.5-0.2,8.2c-0.2,4.1-0.4,8.2-0.6,12.2c0,1-0.1,2.1-0.1,3.1c0,0.9,0.3,1.4,1.3,1.5c3.3,0.3,6.5,0.8,9.8,0.1 c0.5-0.1,1-0.1,1.6-0.2c3.6-0.1,7.3-0.2,10.9-0.4c1.6-0.1,3.2-0.6,4.8-0.7c1.6-0.1,3.3,0,4.9,0.1c0.7,0,1.5,0.1,2.2,0.1 c3.9,0,7.9-0.2,11.8,0c4.5,0.2,9,0.7,13.6,1.1c0.9,0.1,1.8,0.3,2.7,0.3c3.9,0.1,7.5,1.2,11,2.7c0.5,0.2,1.1,0.5,1.5,0.9 c0.8,0.7,1,1.6,0.8,2.6c-0.2,1.1-1.1,1.4-2,1.4c-1.3,0.1-2.7,0.2-4,0c-6.3-0.6-12.6-1.4-18.9-1.9c-3.8-0.3-7.7-0.2-11.6-0.2 c-1.5,0-3,0.2-4.5,0.1c-5.5-0.3-11,0.7-16.4,1.2c-0.3,0-0.6,0.1-0.9,0.1c-5.3-0.1-10.6-0.2-15.8-0.3c-2.1-0.1-4.3-0.3-6.4-0.5 c-1.1-0.1-2.1-0.4-2.8-0.6c0-3.8,0-7.2,0-10.6c0-2.3,0.2-4.6,0.3-6.9c0.1-2.9,0.2-5.8,0.3-8.7c0-0.1,0-0.1,0-0.2 C8.4,59.4,8.1,52.3,8,45.3c-0.1-4.7,0.2-9.4,0.2-14c0-2.4-0.2-4.7-0.2-7.1c0-2.5,0.2-4.9,0.3-7.4c0.1-2.3,0.1-4.6,0.1-6.9 c0-1.9,0.3-2.2,2.2-2.1c1.2,0.1,2.3,0.3,3.5,0.4c3.4,0.3,6.6-1,9.8-1.7c3.6-0.9,7.2-1.4,11-1.4c8.7-0.1,17.2,1.2,25.8,1.4 c3.3,0.1,6.5,0,9.8,0.1c3.6,0.1,7.1,0.5,10.7,0.6c1.2,0.1,2.4,0,3.6-0.1c1.9-0.1,3.6-0.2,5.5,0.5c1.2,0.4,1.5,0.9,1.4,2.1 c0,0.7,0.2,1.5,0.3,2.2c0.1,0.9,0.1,1.8,0,2.6c-0.2,1.9-0.5,3.8-0.7,5.7c-0.4,6,0,12,0.2,18c0.1,6,0,12,0.1,18.1 c0,3.9,0.2,7.7,0.2,11.6c0,1.8-0.5,3.5-0.8,5.3c-0.1,0.3-0.3,0.7-0.6,0.8c-1.6,0.7-3.4,1.5-4.9,0.8c-3.1-1.3-6.3-1.1-9.4-1 c-4.7,0.1-9.5,0.7-14.2,0.8c-3,0.1-6.1-0.3-9.1-0.3c-4.1,0-8.2,0.3-12.3,0.3c-2.2,0-4.4-0.1-6.7-0.2c-1.3-0.1-2-0.9-2.3-2.2 c-0.1-0.6-0.4-1.1-0.5-1.7c-0.1-0.6-0.4-1.4-0.3-1.9c0.7-2.1,0.2-4.3,0.2-6.4c0-3,0.1-6.1,0.1-9.1c0.1-3.6,0.4-7.1,0.4-10.7 c0-3.8,0-7.6-0.3-11.3c-0.3-2.8,1.3-4.6,2.4-6.7c0.2-0.3,0.7-0.5,1.1-0.5c3.5,0,7,0.1,10.4,0.2c4.9,0.1,9.8,0.2,14.7,0.4 c3,0.1,5.9,0.6,8.9,0.8c2.5,0.2,3.5,2,3.9,3.8c0.8,3.1,1.3,6.2,0.1,9.4c-0.6,1.8-0.9,3.7-1.4,5.6c-0.1,0.4-0.1,0.9,0,1.3 c0.8,3.1-0.2,6.2-0.1,9.3c0,2.7-0.8,3.4-3.5,3.5c-4.5,0.2-9.1,0.4-13.6,0.5c-1.3,0-2.7-0.3-4-0.5c-0.8-0.2-1.3-0.8-1.7-1.6 c-0.9-1.9-1.1-3.9-1.1-5.9c0-2.5,0.1-5.1,0.4-7.6c0.2-1.9,2.6-3.7,4.4-3.1c1.6,0.5,3.1,0.2,4.5-0.3c0.3-0.1,0.6-0.2,0.9-0.2 c1.5-0.2,2.4,0.7,1.8,2.1c-0.7,1.7-1.3,2.9-3.6,2.7c-1-0.1-2,0.1-3,0.2c-1.2,2.7,0.5,5,0.3,7.3c4.3,0.5,8.5,1,13,1.6 c0-1.3,0.1-2.5,0-3.7c-0.4-3.8-0.1-7.5,0.6-11.3c0.4-2.1,0.1-4.3,0.1-6.7c-0.9,0-1.9-0.1-2.8-0.1c-2.4,0-4.7,0-7.1-0.1 c-5.1-0.3-10.2-0.6-15.4-1c-0.9-0.1-1.8-0.2-2.7-0.2c-1.3,0-1.5,0.3-1.5,1.6c0,3,0.1,6.1,0,9.1c-0.1,3.1-0.4,6.2-0.7,9.3 c-0.3,3.4-0.3,6.7,0.7,10.1c0.6,2,0.7,4.2,1.1,6.7c1.4,0,2.8,0,4.3,0c4.7,0,9.4-0.1,14-0.2c1.8,0,3.6,0,5.4,0 c3.4,0,6.8-0.1,10.3-0.1c1.1,0,2.2,0.3,3.3,0.4c2.2,0.4,4.4,0.8,6.6,1.2c1.6,0.3,2,0,2.1-1.6c0.1-1.3,0.1-2.5,0.1-3.8 c-0.1-6.6-0.1-13.2-0.2-19.9c-0.1-4.5-0.4-8.9-0.4-13.4c0-3.5,0.4-6.9,0.8-10.4c0.2-1.7,0.5-3.5,0.7-5.3c-2.5-0.2-4.7-0.4-6.9-0.5 c-4.1-0.2-8.2-0.6-12.3-0.5c-7.6,0.3-15.1-0.7-22.7-1.3c-5.3-0.4-10.7-0.1-16.1-0.1C23.4,11.7,19.6,11.9,15.4,12z"></path></svg>`,
		nomedia: `<svg height='24px' width='24px' fill="#FFFF40" data-name="Laag 1" viewBox="0 0 100 100" x="0px" y="0px"><polygon points="75.91 78.29 74.81 77.28 73.73 76.29 26.51 76.29 25.43 77.28 24.33 78.29 24.2 78.41 24.2 79.61 77.35 79.61 75.91 78.29"></polygon><polygon points="79.01 28.17 78.01 29.09 78.01 70.17 79.01 71.08 80.01 72 81.34 73.22 81.34 26.04 80.01 27.26 79.01 28.17"></polygon><polygon points="77.48 19.52 78.57 18.52 21.67 18.52 22.76 19.52 23.86 20.52 76.38 20.52 77.48 19.52"></polygon><polygon points="22.25 70.14 22.25 29.11 21.25 28.19 20.25 27.27 20.25 71.98 21.25 71.06 22.25 70.14"></polygon><path d="M65.82,27a4.87,4.87,0,0,1,2.66.8l3.91-3.59H27.85l16.41,15L47,33.8l5.52,8.57,9-8.28A4.83,4.83,0,0,1,65.82,27Z"></path><polygon points="39.88 47.78 40.76 46.07 25.28 31.88 25.28 57.72 28.05 57.72 36.93 43.28 39.88 47.78"></polygon><polygon points="74.36 57.72 74.36 32.44 63.38 42.5 72.93 57.72 74.36 57.72"></polygon><polygon points="88.85 10.36 79.95 18.52 78.86 19.52 77.77 20.52 75.98 22.16 75.81 22.31 75.64 22.47 74.11 23.87 73.95 24.02 73.78 24.18 69.21 28.37 62.12 34.87 53.07 43.16 51.01 45.05 50.12 45.86 49.23 45.05 43.82 40.09 26.46 24.18 26.29 24.02 26.13 23.87 24.6 22.47 24.43 22.31 24.26 22.16 22.47 20.52 21.38 19.52 20.29 18.52 11.39 10.36 7.99 7.24 4.24 11.33 20.25 26.01 21.25 26.93 22.25 27.84 23.89 29.35 24.04 29.48 24.2 29.63 24.97 30.34 25.13 30.48 25.28 30.62 41.19 45.21 45.12 48.81 46.02 49.62 37.18 57.72 37.02 57.87 36.85 58.03 34.56 60.12 24.2 69.62 24.04 69.77 23.89 69.91 22.25 71.41 21.25 72.33 20.25 73.24 8.45 84.06 11.39 87.26 12.2 88.15 22.96 78.29 23.89 77.43 24.04 77.3 24.06 77.28 24.2 77.15 25.14 76.29 42.86 60.04 45.06 58.03 45.23 57.87 45.4 57.72 50.12 53.39 54.84 57.72 55.01 57.87 55.18 58.03 57.23 59.9 75.1 76.29 76.18 77.28 77.28 78.29 78.72 79.61 78.9 79.77 79.06 79.92 88.04 88.15 88.85 87.26 91.79 84.06 81.65 74.76 81.5 74.63 81.34 74.48 80.01 73.26 79.01 72.34 78.01 71.43 65.35 59.83 63.39 58.03 63.22 57.87 63.06 57.72 54.22 49.62 55.12 48.81 62.88 41.7 74.36 31.17 74.51 31.03 74.67 30.89 78.01 27.82 79.01 26.91 80.01 25.99 81.34 24.77 81.5 24.62 81.65 24.49 96 11.33 92.25 7.24 88.85 10.36"></polygon></svg>`,
		checkbox_cross: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><path d="M80.8,5H19.3C11.4,5,5,11.4,5,19.3v61.5C5,88.6,11.4,95,19.3,95h61.5C88.6,95,95,88.6,95,80.8V19.3C95,11.4,88.6,5,80.8,5z M85,80.8c0,2.3-1.9,4.3-4.3,4.3H19.3c-2.3,0-4.3-1.9-4.3-4.3V19.3c0-2.3,1.9-4.3,4.3-4.3h61.5c2.3,0,4.3,1.9,4.3,4.3V80.8z M69.9,61.6c2,1.9,2.2,5,0.3,7.1c-1,1.1-2.3,1.6-3.7,1.6c-1.2,0-2.4-0.4-3.4-1.3L50.3,57.1L38.4,69.9c-1,1.1-2.3,1.6-3.7,1.6 c-1.2,0-2.4-0.4-3.4-1.3c-2-1.9-2.2-5-0.3-7.1l11.9-12.9L30.1,38.4c-2-1.9-2.2-5-0.3-7.1c1.9-2,5-2.2,7.1-0.3l12.9,11.9l11.9-12.9 c1.9-2,5-2.2,7.1-0.3c2,1.9,2.2,5,0.3,7.1L57.1,49.7L69.9,61.6z"></path></svg>`,
		banhammer: `<svg height='24px' width='24px' fill="#FF4040" x="0px" y="0px" viewBox="0 0 80 80" enable-background="new 0 0 80 80"><path d="M28.832,70.75l-0.542-2C27.693,66.542,25.604,65,23.208,65H8.792c-2.395,0-4.485,1.542-5.082,3.75l-0.542,2 c-0.394,1.454-0.087,2.983,0.84,4.195C4.992,76.232,6.578,77,8.25,77h15.5c1.672,0,3.258-0.768,4.242-2.055 C28.919,73.733,29.226,72.204,28.832,70.75z"></path><path d="M9,17c-1.104,0-2-0.896-2-2v-4c0-1.104,0.896-2,2-2s2,0.896,2,2v4C11,16.104,10.104,17,9,17z"></path><circle cx="9" cy="5" r="2"></circle><path d="M23,11c-1.104,0-2-0.896-2-2V5c0-1.104,0.896-2,2-2s2,0.896,2,2v4C25,10.104,24.104,11,23,11z"></path><circle cx="23" cy="15" r="2"></circle><path d="M72,30c-2.045,0-3.802,1.237-4.576,3H27v-8c0-3.309-2.691-6-6-6H11c-3.309,0-6,2.691-6,6v30c0,3.309,2.691,6,6,6h10 c3.309,0,6-2.691,6-6v-8h40.424c0.774,1.763,2.531,3,4.576,3c2.757,0,5-2.243,5-5V35C77,32.243,74.757,30,72,30z M21,55H11 c-1.104,0-2-0.896-2-2s0.896-2,2-2h10c1.104,0,2,0.896,2,2S22.104,55,21,55z M21,29H11c-1.104,0-2-0.896-2-2s0.896-2,2-2h10 c1.104,0,2,0.896,2,2S22.104,29,21,29z M49.789,39.895l-1,2C48.438,42.596,47.732,43,46.999,43c-0.301,0-0.606-0.067-0.893-0.211 c-0.988-0.494-1.388-1.695-0.895-2.684l1-2c0.495-0.988,1.697-1.388,2.684-0.895C49.882,37.705,50.283,38.906,49.789,39.895z M56.789,39.895l-1,2C55.438,42.596,54.732,43,53.999,43c-0.301,0-0.606-0.067-0.893-0.211c-0.988-0.494-1.388-1.695-0.895-2.684 l1-2c0.495-0.988,1.696-1.388,2.684-0.895C56.882,37.705,57.283,38.906,56.789,39.895z M63.789,39.895l-1,2 C62.438,42.596,61.732,43,60.999,43c-0.301,0-0.606-0.067-0.893-0.211c-0.988-0.494-1.388-1.695-0.895-2.684l1-2 c0.495-0.988,1.697-1.388,2.684-0.895C63.882,37.705,64.283,38.906,63.789,39.895z"></path></svg>`,
		AD: `<svg height='24px' width='24px' fill="#FF4040" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><g><text x="0" y="75" style="font: bold 70px sans-serif;">AD</text></g></svg>`,
		SWEARING: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><g><text x="0" y="80" style="font: bold 90px sans-serif;">%!</text></g></svg>`,
	}

	const config =
	{
		info:
		{
			name: 'AmongUsPolskaAdminOptions',
			description: 'Dodatkowe opcje dla Administracji serwera Among Us Polska.',
			updateUrl: 'https://raw.githubusercontent.com/Benio101/AmongUsPolskaAdminOptions/main/AmongUsPolskaAdminOptions.plugin.js',
			author: 'Benio',
			version: '0.0.2',
		}
	};

	const channels =
	{
		// Cafeteria
		chat_ogolny: '755646984546811995',
		szukanie_druzyny: '755646989173129266',
		szukanie_druzyny_18: '757173602725396520',

		// Multimedia
		media: '755646992180576319',
		propozycje: '755646993048666182',

		// Support
		zgłoszenia: '762748042360913950',
		pomoc_supportu: '755646995863044168',
		komendy: '755646959015952476',
		izolatka_chat: '755646997272199238',
	}

	if (!window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started))
	{
		return class
		{
			getName(){ return config.info.name; }
			getDescription(){ return config.info.description; }
			getAuthor(){ return config.info.author; }
			getVersion(){ return config.info.version; }
			
			load()
			{
				if (!window.BDFDB_Global || !Array.isArray(window.BDFDB_Global.pluginQueue))
					window.BDFDB_Global = Object.assign({}, window.BDFDB_Global, {pluginQueue:[]});

				if (!window.BDFDB_Global.downloadModal)
				{
					window.BDFDB_Global.downloadModal = true;
					BdApi.showConfirmationModal('Library Missing', `The library plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`,
					{
						confirmText: 'Download Now',
						cancelText: 'Cancel',
						onCancel: () => { delete window.BDFDB_Global.downloadModal; },
						onConfirm: () =>
						{
							delete window.BDFDB_Global.downloadModal;
							require('request').get('https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js', (error, response, body) =>
							{
								if (!error && body && body.indexOf(`* @name BDFDB`) > -1)
									require('fs').writeFile(require('path').join(BdApi.Plugins.folder, '0BDFDB.plugin.js'), body, _ => {});
								else
									BdApi.alert('Error', 'Could not download BDFDB library plugin, try again some time later.');
							});
						}
					});
				}

				if (!window.BDFDB_Global.pluginQueue.includes(config.info.name))
					window.BDFDB_Global.pluginQueue.push(config.info.name);
			}

			start(){ this.load(); }
			stop(){}
		}
	}

	if (!global.ZeresPluginLibrary)
	{
		return class
		{
			getName(){ return config.info.name; }
			getDescription(){ return config.info.description; }
			getAuthor(){ return config.info.author; }
			getVersion(){ return config.info.version; }
			
			load()
			{
				BdApi.showConfirmationModal('Library Missing', `The library plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`,
				{
					confirmText: 'Download Now',
					cancelText: 'Cancel',
					onConfirm: () =>
					{
						require('request').get('https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js', async (error, response, body) =>
						{
							if (error)
								return require('electron').shell.openExternal('https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js');
							await new Promise(r => require('fs').writeFile(require('path').join(BdApi.Plugins.folder, '0PluginLibrary.plugin.js'), body, r));
						});
					}
				});
			}

			start(){ this.load(); }
			stop(){}
		}
	}

	let last_warned_user_id = null;
	let last_warned_user_timer = null;

	let send_message = function(channel_id, /*text*/ message)
	{
		ZLibrary.DiscordModules.MessageActions.sendMessage(channel_id, {content: message});
	}

	let delete_message = function(channel_id, message_id)
	{
		ZLibrary.DiscordModules.MessageActions.deleteMessage(channel_id, message_id);
	}

	let execute_commands = function(first_command, ...commands)
	{
		let delay_time = 0;
		let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
		let delay_first_cmd = function(){ return delay(2, 3); };
		let delay_next_cmd = function(){ return delay(6, 9); };

		setTimeout(function(){
			send_message(channels.komendy, first_command);
		}, delay_first_cmd());

		for (let command of commands)
			setTimeout(function(){
				send_message(channels.komendy, command);
			}, delay_next_cmd());

		return delay_time;
	}

	let warn = function(user_id, reason)
	{
		execute_commands(
			`!warn ${user_id} ${reason}`,
			`!warnings ${user_id}`
		);

		last_warned_user_id = user_id;
		last_warned_user_timer = setTimeout(function(){
			last_warned_user_id = null;
		}, 1e3 * 12);
	}

	let perm_ban = function(user_id, reason)
	{
		if (BDFDB.UserUtils.can("BAN_MEMBERS"))
			execute_commands(`!ban ${user_id} ${reason}`);
		else
		{
			let delay_time = perm_mute(user_id);
			setTimeout(function(){
				report(user_id, reason);
			}, 1e3 * (delay_time + 2 + Math.random()));
		}
	}

	let perm_mute = function(user_id)
	{
		const text_mute_id = '773128188339027968';
		const voice_mute_id = '755646821682118687';
		const muted_id = '773152921663176724';

		return execute_commands(
			`?arole ${user_id} ${text_mute_id}`,
			`?arole ${user_id} ${voice_mute_id}`,
			`?arole ${user_id} ${muted_id}`
		);
	}

	let report = function(user_id, reason)
	{
		send_message(channels.zgłoszenia, `${user_id} ${reason}`);
	}

	let has_emoji = function(reactions, emoji_name)
	{
		if (!reactions)
			return false;

		for (let reaction of reactions)
			if (reaction.emoji && reaction.emoji.name == emoji_name)
				return true;

		return false;
	}

	return (([Plugin, BDFDB]) =>
	{
		return class AmongUsPolskaAdminOptions extends Plugin
		{
			onLoad(){
				this.patchedModules = {
					before: {
						Message: "default",
					},
				};
			}

			onStart(){}
			onStop(){}

			onMessageOptionToolbar(e)
			{
				// Niestosowanie się do wzoru
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.szukanie_druzyny
							||	e.instance.props.channel.id == channels.szukanie_druzyny_18
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Niestosowanie się do wzoru',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Niestosowanie się do wzoru na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.checkbox_cross
						})
					})
				}));

				// Wiadomość niezwiązana z szukaniem drużyny
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.szukanie_druzyny
							||	e.instance.props.channel.id == channels.szukanie_druzyny_18
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Wiadomość niezwiązana z szukaniem drużyny',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Wiadomość niezwiązana z szukaniem drużyny na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.crossed_out_person
						})
					})
				}));

				// Niestosowna wiadomość
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.szukanie_druzyny
							||	e.instance.props.channel.id == channels.szukanie_druzyny_18
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Niestosowna wiadomość',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Niestosowna wiadomość na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.swearing
						})
					})
				}));

				// Szukanie drużyny
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.chat_ogolny
							||	e.instance.props.channel.id == channels.media
							||	e.instance.props.channel.id == channels.propozycje
							||	e.instance.props.channel.id == channels.pomoc_supportu
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Szukanie drużyny',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Szukanie drużyny na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.person
						})
					})
				}));

				// Spam
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.chat_ogolny
							||	e.instance.props.channel.id == channels.pomoc_supportu
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Spam',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Spam na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.trash
						})
					})
				}));

				// Bezsensowna wiadomość
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.pomoc_supportu
							||	e.instance.props.channel.id == channels.izolatka_chat
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Bezsensowna wiadomość',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Bezsensowna wiadomość na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.nonsense
						})
					})
				}));

				// Niestosowne słownictwo
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.chat_ogolny
							||	e.instance.props.channel.id == channels.media
							||	e.instance.props.channel.id == channels.propozycje
							||	e.instance.props.channel.id == channels.pomoc_supportu
							||	e.instance.props.channel.id == channels.izolatka_chat
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Niestosowne słownictwo',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Niestosowne słownictwo na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.SWEARING
						})
					})
				}));

				// Niepoprawne użycie kanału #media
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	e.instance.props.channel.id == channels.media
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Niepoprawne użycie kanału',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							warn(user_id, channel_id, `Niepoprawne użycie kanału <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.nomedia
						})
					})
				}));

				// Reklama
				if (
						e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								e.instance.props.channel.id == channels.chat_ogolny
							||	e.instance.props.channel.id == channels.szukanie_druzyny
							||	e.instance.props.channel.id == channels.szukanie_druzyny_18
							||	e.instance.props.channel.id == channels.media
							||	e.instance.props.channel.id == channels.propozycje
							||	e.instance.props.channel.id == channels.pomoc_supportu
							||	e.instance.props.channel.id == channels.izolatka_chat
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: "Reklama",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ =>
						{
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							delete_message(channel_id, message_id);
							perm_ban(user_id, `Reklama na kanale <#${channel_id}>.`);
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.AD
						})
					})
				}));

				// Zgłoszenia
				if (
						!BDFDB.UserUtils.can("BAN_MEMBERS")
					&&	!e.instance.props.expanded
					&&	e.instance.props.channel.id == channels.zgłoszenia
					&&	!has_emoji(e.instance.props.message.reactions, 'blueyes')
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer,
				{
					key: 'mention',
					text: 'Ban',
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable,
					{
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let channel_id = e.instance.props.channel.id;
							let message_id = e.instance.props.message.id;
							let user_id = e.instance.props.message.author.id;

							let content = e.instance.props.message.content;
							if (content)
								execute_commands(`!ban ${content}`);
							
							// TODO: add ':blueyes:' reaction
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon,
						{
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: images.banhammer
						})
					})
				}));
			}

			processMessage(e)
			{
				let childrenMessageContent = e && e.instance && e.instance.props && e.instance.props.childrenMessageContent;
				if (!childrenMessageContent)
					return;

				let message = childrenMessageContent.props && childrenMessageContent.props.message;
				if (!message)
					return;

				let channel_id = message.channel_id;
				let author = message.author;
				if (!author)
					return;

				let author_bot = author.bot;
				let author_name = author.username;

				if (channel_id == channels.komendy && author_bot && author_name == 'Dyno')
				{
					let embed = message.embeds && Array.isArray(message.embeds) && message.embeds[0];
					if (!embed)
						return;

					let embed_author_name = embed.author && embed.author.name;
					if (!embed_author_name)
						return;
						
					let m = embed_author_name.match(/(\d+) Warnings? for .*? \((\d+)\)/);
					if (m)
					{
						let number_of_warns = m[1];
						let warned_user_id = m[2];
						if (warned_user_id == last_warned_user_id)
						{
							last_warned_user_id = null;
							clearTimeout(last_warned_user_timer);

							if (0|number_of_warns < 3)
								return;

							let reason;
							if (0|number_of_warns == 3)
								reason = "Osiągnięto limit ostrzeżeń (3)";
							else
								reason = `Przekroczono limit ostrzeżeń (${number_of_warns}/3)`;

							execute_commands(
								`!tmute ${warned_user_id} ${number_of_warns}d ${reason}.`,
								`!clearwarn ${user_id}`,
								`!warn ${warned_user_id} Usunięte ostrzeżenia: ${number_of_warns}.`,
							);
						}
					}
				}
			}
		};
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();
