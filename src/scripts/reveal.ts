const root = document.documentElement;

if (root.classList.contains("reveal-on")) {
	if (!("IntersectionObserver" in window)) {
		root.classList.remove("reveal-on");
	} else {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("is-revealed");
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -20px 0px" },
		);

		document
			.querySelectorAll<HTMLElement>("[data-reveal]")
			.forEach((element) => {
				observer.observe(element);
			});
	}
}
