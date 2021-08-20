Minimum viable reproduction for GatsbyJS issue [#31775](https://github.com/gatsbyjs/gatsby/issues/31775) to showcase gatsby-plugin-image (probably this plugin..) improperly constrains desktop/mobile logos. Issue has been persistent since June 2021.

Here is a screenshot of the desktop logo constrained to the mobile logo's dimensions
![before screenshot of busted logo](https://mountaintop-coding.s3.us-west-1.amazonaws.com/images/Before.png)

If I switch from mobile to desktop view using dev tools you can see that the mobile logo displays correctly ![after screenshot of busted logo](https://mountaintop-coding.s3.us-west-1.amazonaws.com/images/After.png)

To view the code check `src -> components -> layout.js`