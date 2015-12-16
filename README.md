## Rendering logic

1. All metadata pulled in via Jekyll as json
2. Any repo with "SDK" in the title is ignored since they are already hardcoded into the page.
3. Projects then are sorted by keywords in their title:
	a) Projects with "Facebook", or "Twitter" are put into the social section
	b) Projects with "tutorial" are put into the tutorial section
	c) Projects with "todo", "demo", "any", or a few of the one off apps are put into the sample app section
	d) everything else is put under the "other" section
4. Community projects are populated from a Parse app 
