var documenterSearchIndex = {"docs":
[{"location":"functionindex/#Index-1","page":"Index","title":"Index","text":"","category":"section"},{"location":"functionindex/#","page":"Index","title":"Index","text":"","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"DocTestSetup = quote\n    using ColorSchemes, Colors\nend","category":"page"},{"location":"finding/#Finding-colors-in-colorschemes-1","page":"Finding colors","title":"Finding colors in colorschemes","text":"","category":"section"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"ColorSchemes.jl provides the function getinverse(cscheme, color) which is the inverse of get(cscheme, n).","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"This function returns a value between 0 and 1 that tries to place a color within a colorscheme by converting it to a value representing its position on the colorscheme's 'axis'.","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"(Image: \"get inverse\")","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"getinverse","category":"page"},{"location":"finding/#ColorSchemes.getinverse","page":"Finding colors","title":"ColorSchemes.getinverse","text":"getinverse(cscheme::ColorScheme, c, range=(0.0, 1.0))\n\nComputes where the provided Color c would fit in cscheme.\n\nThis is the inverse of get() — it returns the value x in the provided range for which get(scheme, x) would most closely match the provided Color c.\n\nExamples\n\nThe first example asks: \"where in the leonardo colorscheme will I find the nearest color to red?\":\n\njulia> getinverse(colorschemes[:leonardo], RGB(1, 0, 0))\n0.6248997995654847\n\njulia> getinverse(ColorScheme([Colors.RGB(0,0,0), Colors.RGB(1,1,1)]),  Colors.RGB(.5,.5,.5))\n0.5432555858022048\n\njulia> cs = ColorScheme(range(Colors.RGB(0,0,0), stop=Colors.RGB(1,1,1), length=5))\n\njulia> getinverse(cs, cs[3])\n0.5\n\n\n\n\n\n","category":"function"},{"location":"finding/#Example-of-using-getinverse()-1","page":"Finding colors","title":"Example of using getinverse()","text":"","category":"section"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"One example use for getinverse() is to convert a heatmap image into an Array of continuous values, e.g. temperature.","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"In this example, we will convert a heatmap image representing elevation in the United States into an Array of elevation values. The image represents global temperature anomalies averaged from 2008 through 2012, with blue as -2°C and Red as +2°C. Higher than normal temperatures are shown in red (red is +2°C) and lower than normal temperatures are shown in blue (blue is -2°C). The global surface temperature in 2012 was +0.55°C. source.","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"using Images, FileIO\nimg = download(\"https://www.nasa.gov/images/content/719282main_2008_2012_printdata.1462.jpg\") |> load\nimg = imresize(img, Tuple(Int(x) for x in size(img) .* 0.2));\ndisplay(img)","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"(Image: \"heatmap 1\")","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"temps = [getinverse(ColorSchemes.temperaturemap, pixel) for pixel in img]\n\n432×768 Array{Float64,2}:\n 0.975615  0.975615  0.975615  0.975615  …  0.975615  0.975615  0.975615\n 0.975484  0.975767  0.975615  0.975615     0.975615  0.975615  0.975767\n 0.975615  0.975615  0.975615  0.975615     0.975615  0.975615  0.975615\n 0.975615  0.975615  0.975615  0.975615     0.975615  0.975615  0.975615\n 0.975615  0.975615  0.975615  0.975615     0.975615  0.975615  0.975615\n 0.975615  0.975615  0.975615  0.975615  …  0.975615  0.975615  0.975615\n 0.975615  0.975615  0.975615  0.975615     0.975615  0.975615  0.975615\n 0.975615  0.975615  0.975615  0.975615     0.975615  0.975615  0.975615\n ⋮                                       ⋱  ⋮                           \n 0.820419  0.820084  0.819388  0.819388     0.819977  0.821949  0.81973\n 0.816596  0.816055  0.816055  0.816055  …  0.819388  0.819388  0.818957\n 0.813865  0.813247  0.813247  0.813247     0.816055  0.815452  0.813865\n 0.810015  0.809307  0.809307  0.809307     0.813247  0.812582  0.812582\n 0.808566  0.805171  0.805171  0.805171     0.810015  0.810015  0.809307\n 0.804418  0.801045  0.80182   0.801045     0.805171  0.805171  0.805171\n 0.801045  0.802513  0.802513  0.800252  …  0.804418  0.804308  0.801045\n 0.802037  0.798624  0.798624  0.798624     0.802401  0.800252  0.802848","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"The image has been converted from its original colors to an array of continuous values between 0 and 1. This makes it possible to process as data. For example, we can find the places with the greatest anomalies:","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"mintemp, maxtemp = argmin(temps), argmax(temps)\n\n (CartesianIndex(397, 127), CartesianIndex(17, 314))","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"and these maximum and minimum 'coordinates' can be displayed on the image using another package that allows you to mix images and vector graphics easily (such as Luxor.jl, for example).","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"save(\"/tmp/img.png\", img)\nusing Luxor\npngimg = readpng(\"/tmp/img.png\")\n\nw, h = pngimg.width, pngimg.height\n\nmaxpt = Point(maxtemp[2], maxtemp[1]) # image and graphics coords need swapping\nminpt = Point(mintemp[2], mintemp[1])\n\n@png begin\n    placeimage(pngimg, O, centered=true)\n    translate(-w/2, -h/2)\n    sethue(\"mediumseagreen\")\n    fontsize(20)\n    fontface(\"Avenir-Black\")\n    setopacity(0.75)\n    circle(maxpt, 5, :fill)\n    label(\"largest positive anomaly\", :E, maxpt, offset=20)\n    circle(minpt, 5, :fill)\n    label(\"largest negative anomaly\", :E, minpt, offset=20)\nend 800 460","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"(Image: \"heatmap min and max\")","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"We can display the array of continuous values as a grayscale image, where black is 0.0 and white is 1.0.","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"Gray.(temps)","category":"page"},{"location":"finding/#","page":"Finding colors","title":"Finding colors","text":"(Image: \"heatmap 2 grey\")","category":"page"},{"location":"images/#","page":"Images","title":"Images","text":"DocTestSetup = quote\n    using ColorSchemes, Colors\nend","category":"page"},{"location":"images/#Images-1","page":"Images","title":"Images","text":"","category":"section"},{"location":"images/#A-Julia-Julia-set:-ColorSchemes-and-Images-1","page":"Images","title":"A Julia Julia set: ColorSchemes and Images","text":"","category":"section"},{"location":"images/#","page":"Images","title":"Images","text":"Here's an example of how you can use ColorSchemes when creating images with Images.jl. The code creates a Julia set and uses a pre-defined ColorScheme extracted from Vermeer's painting \"Girl with a Pearl Earring\" (shown at the right for reference).","category":"page"},{"location":"images/#","page":"Images","title":"Images","text":"(Image: \"julia set\")","category":"page"},{"location":"images/#","page":"Images","title":"Images","text":"using ColorSchemes, Images, FileIO\n# and possibly QuartzImageIO (macOS) and/or ImageMagick (Linux)\n\nfunction julia(z, c, maxiter::Int64)\n    for n = 1:maxiter\n        if abs(z) > 2\n            return n\n        end\n        z = z^2 + c\n    end\n    return maxiter\nend\n\n# convert a value between oldmin/oldmax to equivalent value between newmin/newmax\nremap(value, oldmin, oldmax, newmin, newmax) = ((value - oldmin) / (oldmax - oldmin)) * (newmax - newmin) + newmin\n\nfunction draw(c, imsize;\n      xmin = -1, ymin = -1, xmax  =  1, ymax = 1,\n      filename = \"/tmp/julia-set.png\")\n    imOutput = zeros(RGB{Float32}, imsize, imsize)\n    maxiterations = 200\n    for col = range(xmin, stop=xmax, length=imsize)\n        for row = range(ymin, stop=ymax, length=imsize)\n            pixelcolor = julia(complex(row, col), c, maxiterations) / 256\n            xpos = convert(Int, round(remap(col, xmin, xmax, 1, imsize)))\n            ypos = convert(Int, round(remap(row, ymin, ymax, 1, imsize)))\n            imOutput[xpos, ypos] = get(ColorSchemes.vermeer, pixelcolor)\n        end\n    end\n    save(filename, imOutput)\nend\n\ndraw(-0.4 + 0.6im, 1200)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"DocTestSetup = quote\n    using ColorSchemes, Colors\nend","category":"page"},{"location":"basics/#Basics-1","page":"Basic usage","title":"Basics","text":"","category":"section"},{"location":"basics/#ColorScheme-objects-1","page":"Basic usage","title":"ColorScheme objects","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"When you start using ColorSchemes.jl, it loads a set of pre-defined ColorSchemes, and stores them in a dictionary called colorschemes.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"A ColorScheme is a Julia object which contains:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"an array of colors\na string defining a category\na string that can contain descriptive notes","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"To access one of these built-in colorschemes, use its symbol:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> ColorSchemes.leonardo","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"If you're using Juno, for example, the colors in the colorscheme should appear in the Plots window.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"leo color scheme\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Otherwise, you'll see the colors listed as RGB values:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"32-element Array{RGB{Float64},1}:\n RGB{Float64}(0.0548203,0.016509,0.0193152)\n RGB{Float64}(0.0750816,0.0341102,0.0397083)\n RGB{Float64}(0.10885,0.0336675,0.0261204)\n RGB{Float64}(0.100251,0.0534243,0.0497594)\n ...\n RGB{Float64}(0.620187,0.522792,0.216707)\n RGB{Float64}(0.692905,0.56631,0.185515)\n RGB{Float64}(0.681411,0.58149,0.270391)\n RGB{Float64}(0.85004,0.540122,0.136212)\n RGB{Float64}(0.757552,0.633425,0.251451)\n RGB{Float64}(0.816472,0.697015,0.322421)\n RGB{Float64}(0.933027,0.665164,0.198652)\n RGB{Float64}(0.972441,0.790701,0.285136)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"You can access the array of colors as:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"ColorSchemes.leonardo.colors","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"By default, the colorschemes aren't imported. But to avoid using the prefixes, you can import the ones that you want:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> import ColorSchemes.leonardo\njulia> leonardo\n32-element Array{RGB{Float64},1}:\n RGB{Float64}(0.0548203,0.016509,0.0193152)\n RGB{Float64}(0.0750816,0.0341102,0.0397083)\n RGB{Float64}(0.10885,0.0336675,0.0261204)\n RGB{Float64}(0.100251,0.0534243,0.0497594)\n ...\n RGB{Float64}(0.757552,0.633425,0.251451)\n RGB{Float64}(0.816472,0.697015,0.322421)\n RGB{Float64}(0.933027,0.665164,0.198652)\n RGB{Float64}(0.972441,0.790701,0.285136)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"You can reference a single value of a scheme once it's loaded:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"leonardo[3]\n\n-> RGB{Float64}(0.10884977211887092,0.033667530751245296,0.026120424375656533)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Or you can 'sample' the scheme at any point between 0 and 1 using get():","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"get(leonardo, 0.5)\n\n-> RGB{Float64}(0.42637271063618504,0.28028983973265065,0.11258024276603132)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"get","category":"page"},{"location":"basics/#Base.get","page":"Basic usage","title":"Base.get","text":"get(cscheme::ColorScheme, x, rangescale)\n\nReturns a single color from the colorscheme.\n\n\n\n\n\nget(cscheme::ColorScheme, inData :: Array{Number, 2}, rangescale=:clamp)\nget(cscheme::ColorScheme, inData :: Array{Number, 2}, rangescale=(minVal, maxVal))\n\nReturn an RGB array of colors generated by applying the colorscheme to the 2D input data.\n\nIf rangescale is :clamp the colorscheme is applied to values between 0.0-1.0, and values outside this range get clamped to the ends of the colorscheme.\n\nElse, if rangescale is :extrema, the colorscheme is applied to the range minimum(indata)..maximum(indata).\n\nExamples\n\nimg = get(colorschemes[:leonardo], rand(10,10)) # displays in Juno Plots window, but\nsave(\"testoutput.png\", img)      # you'll need FileIO or similar to do this\n\nimg2 = get(colorschemes[:leonardo], 10.0 * rand(10, 10), :extrema)\nimg3 = get(colorschemes[:leonardo], 10.0 * rand(10, 10), (1.0, 9.0))\n\n# Also works with PerceptualColourMaps\nusing PerceptualColourMaps # warning, installs PyPlot, PyCall, LaTeXStrings\nimg4 = get(PerceptualColourMaps.cmap(\"R1\"), rand(10,10))\n\n\n\n\n\nget(cs::ColorScheme, g::Color{T,1} where T<:Union{Bool, AbstractFloat, FixedPoint})\n\nReturn the color in cs that corresponds to the gray value g.\n\n\n\n\n\n","category":"function"},{"location":"basics/#The-colorschemes-dictionary-1","page":"Basic usage","title":"The colorschemes dictionary","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"The ColorSchemes module automatically provides a number of predefined schemes. All the colorschemes are stored in an exported dictionary, called colorschemes.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"colorschemes[:summer] |> show\n    ColorScheme(\n        ColorTypes.RGB{Float64}[\n            RGB{Float64}(0.0,0.5,0.4),\n            RGB{Float64}(0.01,0.505,0.4),\n            RGB{Float64}(0.02,0.51,0.4),\n            RGB{Float64}(0.03,0.515,0.4),\n            ...\n            RGB{Float64}(1.0,1.0,0.4)],\n       \"matplotlib\",\n       \"sampled color schemes, sequential linearly-increasing shades of green-yellow\")","category":"page"},{"location":"basics/#Pre-defined-schemes-1","page":"Basic usage","title":"Pre-defined schemes","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Each scheme is drawn in three ways: first, showing each defined color; next, a continuous blend obtained using get() with values ranging from 0 to 1 (stepping through the range 0:0.001:1); and finally a luminance graph shows how the luminance of the scheme varies as the colors change.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"It's generally agreed (search the web for \"Rainbow colormaps considered harmful\") that you should choose colormaps with smooth linear luminance gradients.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"cmocean schemes\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"matplot schemes\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"colorbrewer schemes\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"gnuplot schemes\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"colorcet schemes\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"general schemes\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"colorschemes","category":"page"},{"location":"basics/#ColorSchemes.colorschemes","page":"Basic usage","title":"ColorSchemes.colorschemes","text":"colorschemes\n\nAn exported dictionary of pre-defined colorschemes:\n\ncolorschemes[:summer] |> show\n   ColorScheme(\n      ColorTypes.RGB{Float64}[\n          RGB{Float64}(0.0,0.5,0.4), RGB{Float64}(0.01,0.505,0.4), RGB{Float64}(0.02,0.51,0.4), RGB{Float64}(0.03,0.515,0.4),\n          ...\n\nTo choose a random ColorScheme:\n\nusing Random\nscheme = first(Random.shuffle!(collect(keys(colorschemes))))\n\n\n\n\n\n","category":"constant"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"To choose a random ColorScheme:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"using Random\nscheme = first(Random.shuffle!(collect(keys(colorschemes))))","category":"page"},{"location":"basics/#Finding-colorschemes-1","page":"Basic usage","title":"Finding colorschemes","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Use the findcolorscheme() function to search through the pre-defined colorschemes. The string you provide can occur in the colorscheme's name, in the category, or in the notes. It's interpreted as a case-insensitive regular expression.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> findcolorscheme(\"magen\")\n\ncolorschemes containing \"magen\"\n\nspring               (notes) sampled color schemes, linearl...\ncool                 (notes) sampled color schemes, linearl...\nhsv                  (notes) sampled color schemes, red-yel...\n\nfound 3 results for \"magenta\"","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> findcolorscheme(\"cmocean\")\ncolorschemes containing \"cmocean\"\n\noxy                  (category) cmocean\nmatter               (category) cmocean\ndense                (category) cmocean\nbalance              (category) cmocean\nthermal              (category) cmocean\ntempo                (category) cmocean\ngray                 (category) cmocean\nspeed                (category) cmocean\nturbid               (category) cmocean\nsolar                (category) cmocean\nice                  (category) cmocean\nhaline               (category) cmocean\nalgae                (category) cmocean\namp                  (category) cmocean\ndeep                 (category) cmocean\ndelta                (category) cmocean\ncurl                 (category) cmocean\nphase                (category) cmocean\n\nfound 18 results for \"cmocean\"","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"findcolorscheme","category":"page"},{"location":"basics/#ColorSchemes.findcolorscheme","page":"Basic usage","title":"ColorSchemes.findcolorscheme","text":"findcolorscheme(str)\n\nFind all color schemes matching str. str is interpreted as a regular expression (case-insensitive).\n\nTo read the notes of built-in colorscheme cscheme:\n\ncolorschemes[:cscheme].notes\n\n\n\n\n\n","category":"function"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"If you prefer, you can 'roll your own' search.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"[k for (k, v) in ColorSchemes.colorschemes if occursin(r\"colorbrew\"i, v.category)]\n265-element Array{Symbol,1}:\n :BuPu_6\n :Spectral_4\n :RdYlGn_5\n ⋮\n :BrBG_8\n :Oranges_4","category":"page"},{"location":"basics/#Make-your-own-ColorScheme-1","page":"Basic usage","title":"Make your own ColorScheme","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"You can easily make your own ColorScheme objects by building an array:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"using Colors\ngrays = ColorScheme([RGB{Float64}(i, i, i) for i in 0:0.1:1.0])","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Give it a category or some added notes if you want:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"grays = ColorScheme([RGB{Float64}(i, i, i) for i in 0:0.1:1.0],\n    \"my useful schemes\", \"just some dull grey shades\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"although this won't end up in the colorschemes dictionary.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Another example, starting with a two-color scheme, then building a gradient from the first color to the other.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"myscheme = ColorScheme([Colors.RGB(1.0, 0.0, 0.0), Colors.RGB(0.0, 1.0, 0.0)],\n               \"custom\", \"twotone, red and green\")\nColorScheme([get(myscheme, i) for i in 0.0:0.01:1.0])","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Another way is to use loadcolorscheme() function:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"loadcolorscheme(:mygrays, [RGB{Float64}(i, i, i) for i in 0:0.1:1.0],\n     \"useful schemes\", \"just some dull grey shades\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"and that will be added (temporarily).","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> findcolorscheme(\"dull\")\n\ncolorschemes containing \"dull\"\n\nmygrays              (notes) just some dull grey shades...\n\n\nfound 1 result for \"dull\"","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"If you want to make more advanced ColorSchemes, use linear-segment dictionaries or indexed lists, and use functions to generate color values, see the make_colorscheme() function in the ColorSchemeTools.jl package.","category":"page"},{"location":"basics/#Continuous-color-sampling-1","page":"Basic usage","title":"Continuous color sampling","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"You can access the specific colors of a colorscheme by indexing (eg leonardo[2] or leonardo[5:end]). Or you can sample a ColorScheme at a point between 0.0 and 1.0 as if it were a continuous range of colors:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"get(leonardo, 0.5)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"returns","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"RGB{Float64}(0.42637271063618504,0.28028983973265065,0.11258024276603132)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"get example\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"The colors in the predefined ColorSchemes are usually sorted by LUV luminance, so this often makes sense.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"You can use get() with index data in arrays to return arrays of colors:","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> get(leonardo, [0.0, 0.5, 1.0])\n3-element Array{RGB{Float64},1} with eltype ColorTypes.RGB{Float64}:\n RGB{Float64}(0.05482025926320272,0.016508952654741622,0.019315160361063788)\n RGB{Float64}(0.42637271063618504,0.28028983973265065,0.11258024276603132)  \n RGB{Float64}(0.9724409077178674,0.7907008712807734,0.2851364857083522)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"get example 2\")","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"julia> simg = get(leonardo, rand(10, 16));\njulia> using FileIO\njulia> save(\"mosaic.png\", simg)","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"(Image: \"get example 1\")","category":"page"},{"location":"basics/#Matplotlib-compatibility-1","page":"Basic usage","title":"Matplotlib compatibility","text":"","category":"section"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"Most of the color schemes in Matplotlib are available. The following list gives a general picture.","category":"page"},{"location":"basics/#","page":"Basic usage","title":"Basic usage","text":"using ColorSchemes\n\n# https://matplotlib.org/examples/color/colormaps_reference.html\n\nmatplotlibcmaps = Dict(\n   :perceptuallyuniformsequential => [\n      :viridis, :plasma, :inferno, :magma],\n   :sequential => [\n      :Greys_9, :Purples_9, :Blues_9, :Greens_9, :Oranges_9, :Reds_9,\n      :YlOrBr_9, :YlOrRd_9, :OrRd_9, :PuRd_9, :RdPu_9, :BuPu_9,\n      :GnBu_9, :PuBu_9, :YlGnBu_9, :PuBuGn_9, :BuGn_9, :YlGn_9],\n   :sequential2 => [\n      :binary, :gist_yarg, :gist_gray, :gray, :bone, :pink,\n      :spring, :summer, :autumn, :winter, :cool, :Wistia,\n      :hot, :afmhot, :gist_heat, :copper],\n   :diverging => [\n      :PiYG_11, :PRGn_11, :BrBG_11, :PuOr_11, :RdGy_11, :RdBu_11,\n      :RdYlBu_11, :RdYlGn_11, :Spectral_11, :coolwarm, :bwr, :seismic],\n   :cyclical => [\n        :twilight, :twilight_shifted, :hsv],\n   :qualitative => [\n      :Pastel1_9, :Pastel2_8, :Paired_11, :Accent_8,\n      :Dark2_8, :Set1_9, :Set2_8, :Set3_12,\n      :tab10, :tab20, :tab20b, :tab20c],\n   :miscellaneous => [\n      :flag, :prism, :ocean, :gist_earth, :terrain, :gist_stern,\n      :gnuplot, :gnuplot2, :CMRmap, :cubehelix, :brg, :hsv,\n      :gist_rainbow, :rainbow, :jet, :nipy_spectral, :gist_ncar]\n   )\n\nfor (k, v) in matplotlibcmaps\n   println(\"$(rpad(k, 12)) $(length(v))\")\n   for cs in v\n      try\n         c = ColorSchemes.colorschemes[cs]\n      catch\n         println(\"\\t$(rpad(cs, 12)) not currently in stock\")\n      end\n   end\nend","category":"page"},{"location":"plotting/#Plotting-1","page":"Plotting","title":"Plotting","text":"","category":"section"},{"location":"plotting/#Plots.jl-1","page":"Plotting","title":"Plots.jl","text":"","category":"section"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"To use ColorSchemes with Plots.jl, you can access the colors directly. For example, with the contour() function, use cgrad() to read the colors as a gradient. This renaissance-looking plot uses the leonardo scheme:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"using Plots, ColorSchemes\n\nx = 1:0.3:20\ny = x\nf(x, y) = begin\n      sin(x) + cos(y)\n  end\ncontour(x, y, f, fill=true, seriescolor = cgrad(ColorSchemes.leonardo.colors))","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"contour\")","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(You can use c as a short cut for seriescolor.)","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"With other plots, use the palette keyword:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"plot(Plots.fakedata(100, 20),\n    w=4,\n    background_color=ColorSchemes.vermeer[1],\n    palette=ColorSchemes.vermeer.colors)","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"palette\")","category":"page"},{"location":"plotting/#Gadfly-1","page":"Plotting","title":"Gadfly","text":"","category":"section"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"Here's how you can use ColorSchemes in Gadfly:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"using Gadfly, ColorSchemes\nx = repeat(collect(1:20), inner=[20]);\ny = repeat(collect(1:20), outer=[20]);\nplot(x=x, y=y,\n    color=x+y,\n    Geom.rectbin,\n    Scale.ContinuousColorScale(p -> get(ColorSchemes.sunset, p)))","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"gadfly\")","category":"page"},{"location":"plotting/#Makie-1","page":"Plotting","title":"Makie","text":"","category":"section"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"If you use Makie.jl you can pass the colors in a ColorScheme directly to the colormap keyword.","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"using Makie, ColorSchemes\nN = 20\nx = LinRange(-0.3, 1, N)\ny = LinRange(-1, 0.5, N)\nz = x .* y'\nimage(x, y, z, colormap = ColorSchemes.picasso.colors)","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"makie\")","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"You can display all the colorschemes using Makie by letting the code browse through the colorschemes dictionary:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"using Makie, ColorSchemes\n\nh = 0.0\noffset = 0.1\nscene = Scene()\ncam2d!(scene)\nplot = map(collect(keys(colorschemes))) do cmap\n     global h\n     c = to_colormap(colorschemes[cmap].colors)\n     cbar = image!(\n         scene,\n         range(0, stop = 10, length = length(c)),\n         range(0, stop = 1, length = length(c)),\n         reshape(c, (length(c), 1)),\n         show_axis = false\n     )[end]\n     text!(\n         scene,\n         string(cmap, \":\"),\n         position = Point2f0(-0.1, 0.5 + h),\n         align = (:right, :center),\n         show_axis = false,\n         textsize = 0.4\n     )\n     translate!(cbar, 0, h, 0)\n     h -= (1 + offset)\nend\nscene","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"makie all colorschemes\")","category":"page"},{"location":"plotting/#Winston-1","page":"Plotting","title":"Winston","text":"","category":"section"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"If you prefer Winston.jl for plotting, you can use ColorSchemes with imagesc:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"using Winston, ColorSchemes\nklimt = ColorSchemes.klimt.colors\nWinston.colormap(klimt)\nWinston.imagesc(reshape(1:10000,100,100))","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"winston klimt\")","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"Sometimes you'll want a smoother gradient with more colors. You can use get(scheme, n) to generate a more detailed array of colors, varying n from 0 to 1 by 0.001:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"brasstones = ColorSchemes.brass\nbrasstonesmooth = [get(brasstones, i) for i in 0:0.001:1]\nWinston.colormap(brasstonesmooth)\nWinston.imagesc(reshape(1:10000,100,100))","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"winston brass tones)","category":"page"},{"location":"plotting/#PyPlot-1","page":"Plotting","title":"PyPlot","text":"","category":"section"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"ColorSchemes can be used with the cmap keyword in PyPlot:","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"# warning: this crashes your Julia session at the moment (2019-01-24)\n\nusing PyPlot, Distributions, ColorSchemes\n\nsolar = ColorSchemes.solar.colors\n\nn = 100\nx = range(-3, stop=3, length=n)\ny = range(-3, stop=3, length=n)\n\nxgrid = repeat(x', n, 1);\nygrid = repeat(y, 1, n);\nz = zeros(n, n);\n\nfor i in 1:n\n    for j in 1:n\n        z[i, j] = 2sin(x[i]) * 2cos(y[j])\n    end\nend\n\nfig = PyPlot.figure(\"pyplot_surfaceplot\",figsize=(10,10))\n\nusing3D()\nax = fig[:add_subplot](2, 1, 1, projection = \"3d\")\n\nax[:plot_surface](xgrid, ygrid, z, rstride=2,edgecolors=\"k\",\n    cstride=2,\n    cmap=ColorMap(solar),\n    alpha=0.8,\n    linewidth=0.25)","category":"page"},{"location":"plotting/#","page":"Plotting","title":"Plotting","text":"(Image: \"pyplot\")","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"DocTestSetup = quote\n    using ColorSchemes, Colors\nend","category":"page"},{"location":"#Introduction-to-ColorSchemes-1","page":"Introduction","title":"Introduction to ColorSchemes","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"This package provides a collection of colorschemes and colormaps:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"scientifically devised colorschemes from ColorBrewer and CMOcean\npopular favourites such as viridis, inferno, and magma from MATPlotLib\nold masters' colorschemes, such as leonardo, vermeer, and picasso\nvariously themed colorschemes such as sunset, coffee, neon, and pearl","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The package is designed for general purpose and informal graphics work. For high quality color maps that have consistent perceptual contrast over their full range, refer to Peter Kovesi's PerceptualColourMaps package.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"This package relies on the Colors.jl package.","category":"page"},{"location":"#Installation-and-basic-usage-1","page":"Introduction","title":"Installation and basic usage","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Install the package as follows:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"] add ColorSchemes","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"and to use it:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"using ColorSchemes","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Original version by cormullion.","category":"page"},{"location":"#Documentation-1","page":"Introduction","title":"Documentation","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"This documentation was built using Documenter.jl.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"using Dates # hide\nprintln(\"Documentation built $(Dates.now()) with Julia $(VERSION)\") # hide","category":"page"}]
}