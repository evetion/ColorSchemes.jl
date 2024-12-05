#=

https://publiclab.org/notes/cfastie/08-26-2014/new-ndvi-colormap

This new colormap has several useful features (for about 90%
of us).

ColorSchemes's values are [0..1], the following description
talks about values in the range [-1..+1].

1 The left half of the colormap has three gradients between
black and white. This does not allow you to discern the
value from the tone, but the values of NDVI below zero
indicate zero photosynthesis, so we generally do not care
exactly what the value is. The multiple gradients preserve
the detail of non-plants in the NDVI image. It just makes
the NDVI image easier to look at because you can recognize
objects and textures that are not foliage.

2 The boundary between grayscale and color is not at zero.
Live foliage generally does not have NDVI values below 0.1,
so that is the boundary between grayscale and color. With
this colormap, anything in grayscale is probably not a
plant. This allows a more precise differentiation between
plant and non-plant when the NDVI values are calibrated.

3 There is a narrow band of violet between 0.1 and 0.2 which
could represent very low photosynthetic activity, but might
also be noise or error.

4 The primary gradient of photosynthetic activity is from
NDVI values from 0.2 to 0.9, and that is represented with a
classic heat map from green to yellow to red. It's a little
bit counter intuitive because green does not represent the
healthiest plants, but the heat map metaphor seems to work
well for most people.

5 The highest values (> 0.9) are colored magenta. Foliage
generally does not have NDVI values this high, so this color
represents non-plants. I did not make it a gray so it can be
distinguished from low values. In many cases, DIY NDVI
values above 0.9 are artifacts where the image is very dark
or very bright.

=#

loadcolorscheme(:fastie, [
RGB(1.0, 1.0, 1.0),
RGB(0.9803921568627451, 0.9803921568627451, 0.9803921568627451),
RGB(0.9647058823529412, 0.9647058823529412, 0.9647058823529412),
RGB(0.9490196078431372, 0.9490196078431372, 0.9490196078431372),
RGB(0.9333333333333333, 0.9333333333333333, 0.9333333333333333),
RGB(0.9137254901960784, 0.9137254901960784, 0.9137254901960784),
RGB(0.8980392156862745, 0.8980392156862745, 0.8980392156862745),
RGB(0.8823529411764706, 0.8823529411764706, 0.8823529411764706),
RGB(0.8666666666666667, 0.8666666666666667, 0.8666666666666667),
RGB(0.8470588235294118, 0.8470588235294118, 0.8470588235294118),
RGB(0.8313725490196079, 0.8313725490196079, 0.8313725490196079),
RGB(0.8156862745098039, 0.8156862745098039, 0.8156862745098039),
RGB(0.8, 0.8, 0.8),
RGB(0.7843137254901961, 0.7843137254901961, 0.7843137254901961),
RGB(0.7647058823529411, 0.7647058823529411, 0.7647058823529411),
RGB(0.7490196078431373, 0.7490196078431373, 0.7490196078431373),
RGB(0.7333333333333333, 0.7333333333333333, 0.7333333333333333),
RGB(0.7176470588235294, 0.7176470588235294, 0.7176470588235294),
RGB(0.6980392156862745, 0.6980392156862745, 0.6980392156862745),
RGB(0.6823529411764706, 0.6823529411764706, 0.6823529411764706),
RGB(0.6666666666666666, 0.6666666666666666, 0.6666666666666666),
RGB(0.6509803921568628, 0.6509803921568628, 0.6509803921568628),
RGB(0.6313725490196078, 0.6313725490196078, 0.6313725490196078),
RGB(0.615686274509804, 0.615686274509804, 0.615686274509804),
RGB(0.6, 0.6, 0.6),
RGB(0.5843137254901961, 0.5843137254901961, 0.5843137254901961),
RGB(0.5686274509803921, 0.5686274509803921, 0.5686274509803921),
RGB(0.5490196078431373, 0.5490196078431373, 0.5490196078431373),
RGB(0.5333333333333333, 0.5333333333333333, 0.5333333333333333),
RGB(0.5176470588235295, 0.5176470588235295, 0.5176470588235295),
RGB(0.5019607843137255, 0.5019607843137255, 0.5019607843137255),
RGB(0.4823529411764706, 0.4823529411764706, 0.4823529411764706),
RGB(0.4666666666666667, 0.4666666666666667, 0.4666666666666667),
RGB(0.45098039215686275, 0.45098039215686275, 0.45098039215686275),
RGB(0.43529411764705883, 0.43529411764705883, 0.43529411764705883),
RGB(0.41568627450980394, 0.41568627450980394, 0.41568627450980394),
RGB(0.4, 0.4, 0.4),
RGB(0.3843137254901961, 0.3843137254901961, 0.3843137254901961),
RGB(0.3686274509803922, 0.3686274509803922, 0.3686274509803922),
RGB(0.35294117647058826, 0.35294117647058826, 0.35294117647058826),
RGB(0.3333333333333333, 0.3333333333333333, 0.3333333333333333),
RGB(0.3176470588235294, 0.3176470588235294, 0.3176470588235294),
RGB(0.30196078431372547, 0.30196078431372547, 0.30196078431372547),
RGB(0.28627450980392155, 0.28627450980392155, 0.28627450980392155),
RGB(0.26666666666666666, 0.26666666666666666, 0.26666666666666666),
RGB(0.25098039215686274, 0.25098039215686274, 0.25098039215686274),
RGB(0.23529411764705882, 0.23529411764705882, 0.23529411764705882),
RGB(0.2196078431372549, 0.2196078431372549, 0.2196078431372549),
RGB(0.20392156862745098, 0.20392156862745098, 0.20392156862745098),
RGB(0.2196078431372549, 0.2196078431372549, 0.2196078431372549),
RGB(0.23529411764705882, 0.23529411764705882, 0.23529411764705882),
RGB(0.25098039215686274, 0.25098039215686274, 0.25098039215686274),
RGB(0.26666666666666666, 0.26666666666666666, 0.26666666666666666),
RGB(0.28627450980392155, 0.28627450980392155, 0.28627450980392155),
RGB(0.30196078431372547, 0.30196078431372547, 0.30196078431372547),
RGB(0.3176470588235294, 0.3176470588235294, 0.3176470588235294),
RGB(0.3333333333333333, 0.3333333333333333, 0.3333333333333333),
RGB(0.35294117647058826, 0.35294117647058826, 0.35294117647058826),
RGB(0.3686274509803922, 0.3686274509803922, 0.3686274509803922),
RGB(0.3843137254901961, 0.3843137254901961, 0.3843137254901961),
RGB(0.4, 0.4, 0.4),
RGB(0.41568627450980394, 0.41568627450980394, 0.41568627450980394),
RGB(0.43529411764705883, 0.43529411764705883, 0.43529411764705883),
RGB(0.45098039215686275, 0.45098039215686275, 0.45098039215686275),
RGB(0.4666666666666667, 0.4666666666666667, 0.4666666666666667),
RGB(0.4823529411764706, 0.4823529411764706, 0.4823529411764706),
RGB(0.5019607843137255, 0.5019607843137255, 0.5019607843137255),
RGB(0.5176470588235295, 0.5176470588235295, 0.5176470588235295),
RGB(0.5333333333333333, 0.5333333333333333, 0.5333333333333333),
RGB(0.5490196078431373, 0.5490196078431373, 0.5490196078431373),
RGB(0.5686274509803921, 0.5686274509803921, 0.5686274509803921),
RGB(0.5843137254901961, 0.5843137254901961, 0.5843137254901961),
RGB(0.6, 0.6, 0.6),
RGB(0.615686274509804, 0.615686274509804, 0.615686274509804),
RGB(0.6313725490196078, 0.6313725490196078, 0.6313725490196078),
RGB(0.6509803921568628, 0.6509803921568628, 0.6509803921568628),
RGB(0.6666666666666666, 0.6666666666666666, 0.6666666666666666),
RGB(0.6823529411764706, 0.6823529411764706, 0.6823529411764706),
RGB(0.6980392156862745, 0.6980392156862745, 0.6980392156862745),
RGB(0.7176470588235294, 0.7176470588235294, 0.7176470588235294),
RGB(0.7333333333333333, 0.7333333333333333, 0.7333333333333333),
RGB(0.7490196078431373, 0.7490196078431373, 0.7490196078431373),
RGB(0.7647058823529411, 0.7647058823529411, 0.7647058823529411),
RGB(0.7843137254901961, 0.7843137254901961, 0.7843137254901961),
RGB(0.8, 0.8, 0.8),
RGB(0.8156862745098039, 0.8156862745098039, 0.8156862745098039),
RGB(0.8313725490196079, 0.8313725490196079, 0.8313725490196079),
RGB(0.8470588235294118, 0.8470588235294118, 0.8470588235294118),
RGB(0.8666666666666667, 0.8666666666666667, 0.8666666666666667),
RGB(0.8823529411764706, 0.8823529411764706, 0.8823529411764706),
RGB(0.8980392156862745, 0.8980392156862745, 0.8980392156862745),
RGB(0.9137254901960784, 0.9137254901960784, 0.9137254901960784),
RGB(0.9333333333333333, 0.9333333333333333, 0.9333333333333333),
RGB(0.9490196078431372, 0.9490196078431372, 0.9490196078431372),
RGB(0.9647058823529412, 0.9647058823529412, 0.9647058823529412),
RGB(0.9803921568627451, 0.9803921568627451, 0.9803921568627451),
RGB(1.0, 1.0, 1.0),
RGB(0.9803921568627451, 0.9803921568627451, 0.9803921568627451),
RGB(0.9607843137254902, 0.9607843137254902, 0.9607843137254902),
RGB(0.9411764705882353, 0.9411764705882353, 0.9411764705882353),
RGB(0.9215686274509803, 0.9215686274509803, 0.9215686274509803),
RGB(0.9019607843137255, 0.9019607843137255, 0.9019607843137255),
RGB(0.8823529411764706, 0.8823529411764706, 0.8823529411764706),
RGB(0.8627450980392157, 0.8627450980392157, 0.8627450980392157),
RGB(0.8431372549019608, 0.8431372549019608, 0.8431372549019608),
RGB(0.8235294117647058, 0.8235294117647058, 0.8235294117647058),
RGB(0.803921568627451, 0.803921568627451, 0.803921568627451),
RGB(0.7843137254901961, 0.7843137254901961, 0.7843137254901961),
RGB(0.7647058823529411, 0.7647058823529411, 0.7647058823529411),
RGB(0.7450980392156863, 0.7450980392156863, 0.7450980392156863),
RGB(0.7254901960784313, 0.7254901960784313, 0.7254901960784313),
RGB(0.7058823529411765, 0.7058823529411765, 0.7058823529411765),
RGB(0.6862745098039216, 0.6862745098039216, 0.6862745098039216),
RGB(0.6666666666666666, 0.6666666666666666, 0.6666666666666666),
RGB(0.6470588235294118, 0.6470588235294118, 0.6470588235294118),
RGB(0.6274509803921569, 0.6274509803921569, 0.6274509803921569),
RGB(0.6078431372549019, 0.6078431372549019, 0.6078431372549019),
RGB(0.592156862745098, 0.592156862745098, 0.592156862745098),
RGB(0.5725490196078431, 0.5725490196078431, 0.5725490196078431),
RGB(0.5529411764705883, 0.5529411764705883, 0.5529411764705883),
RGB(0.5333333333333333, 0.5333333333333333, 0.5333333333333333),
RGB(0.5137254901960784, 0.5137254901960784, 0.5137254901960784),
RGB(0.49411764705882355, 0.49411764705882355, 0.49411764705882355),
RGB(0.4745098039215686, 0.4745098039215686, 0.4745098039215686),
RGB(0.4549019607843137, 0.4549019607843137, 0.4549019607843137),
RGB(0.43529411764705883, 0.43529411764705883, 0.43529411764705883),
RGB(0.41568627450980394, 0.41568627450980394, 0.41568627450980394),
RGB(0.396078431372549, 0.396078431372549, 0.396078431372549),
RGB(0.3764705882352941, 0.3764705882352941, 0.3764705882352941),
RGB(0.3568627450980392, 0.3568627450980392, 0.3568627450980392),
RGB(0.33725490196078434, 0.33725490196078434, 0.33725490196078434),
RGB(0.3176470588235294, 0.3176470588235294, 0.3176470588235294),
RGB(0.2980392156862745, 0.2980392156862745, 0.2980392156862745),
RGB(0.2784313725490196, 0.2784313725490196, 0.2784313725490196),
RGB(0.25882352941176473, 0.25882352941176473, 0.25882352941176473),
RGB(0.23921568627450981, 0.23921568627450981, 0.23921568627450981),
RGB(0.2196078431372549, 0.2196078431372549, 0.2196078431372549),
RGB(0.25882352941176473, 0.25882352941176473, 0.3137254901960784),
RGB(0.30196078431372547, 0.30196078431372547, 0.4117647058823529),
RGB(0.3411764705882353, 0.3411764705882353, 0.5098039215686274),
RGB(0.3843137254901961, 0.3843137254901961, 0.6078431372549019),
RGB(0.4235294117647059, 0.4235294117647059, 0.7058823529411765),
RGB(0.4666666666666667, 0.4666666666666667, 0.803921568627451),
RGB(0.5058823529411764, 0.5058823529411764, 0.9019607843137255),
RGB(0.5490196078431373, 0.5490196078431373, 1.0),
RGB(0.5137254901960784, 0.5764705882352941, 0.9372549019607843),
RGB(0.47843137254901963, 0.6039215686274509, 0.8745098039215686),
RGB(0.44313725490196076, 0.6313725490196078, 0.8117647058823529),
RGB(0.4117647058823529, 0.6588235294117647, 0.7490196078431373),
RGB(0.3764705882352941, 0.6862745098039216, 0.6862745098039216),
RGB(0.3411764705882353, 0.7176470588235294, 0.6235294117647059),
RGB(0.3058823529411765, 0.7450980392156863, 0.5607843137254902),
RGB(0.27450980392156865, 0.7725490196078432, 0.4980392156862745),
RGB(0.23921568627450981, 0.8, 0.43529411764705883),
RGB(0.20392156862745098, 0.8274509803921568, 0.37254901960784315),
RGB(0.16862745098039217, 0.8588235294117647, 0.30980392156862746),
RGB(0.13725490196078433, 0.8862745098039215, 0.24705882352941178),
RGB(0.10196078431372549, 0.9137254901960784, 0.1843137254901961),
RGB(0.06666666666666667, 0.9411764705882353, 0.12156862745098039),
RGB(0.03137254901960784, 0.9686274509803922, 0.058823529411764705),
RGB(0.0, 1.0, 0.0),
RGB(0.027450980392156862, 1.0, 0.0),
RGB(0.058823529411764705, 1.0, 0.0),
RGB(0.09019607843137255, 1.0, 0.0),
RGB(0.12156862745098039, 1.0, 0.0),
RGB(0.15294117647058825, 1.0, 0.0),
RGB(0.1843137254901961, 1.0, 0.0),
RGB(0.21568627450980393, 1.0, 0.0),
RGB(0.24705882352941178, 1.0, 0.0),
RGB(0.2784313725490196, 1.0, 0.0),
RGB(0.30980392156862746, 1.0, 0.0),
RGB(0.3411764705882353, 1.0, 0.0),
RGB(0.37254901960784315, 1.0, 0.0),
RGB(0.403921568627451, 1.0, 0.0),
RGB(0.43529411764705883, 1.0, 0.0),
RGB(0.4666666666666667, 1.0, 0.0),
RGB(0.4980392156862745, 1.0, 0.0),
RGB(0.5294117647058824, 1.0, 0.0),
RGB(0.5607843137254902, 1.0, 0.0),
RGB(0.592156862745098, 1.0, 0.0),
RGB(0.6235294117647059, 1.0, 0.0),
RGB(0.6549019607843137, 1.0, 0.0),
RGB(0.6862745098039216, 1.0, 0.0),
RGB(0.7176470588235294, 1.0, 0.0),
RGB(0.7490196078431373, 1.0, 0.0),
RGB(0.7803921568627451, 1.0, 0.0),
RGB(0.8117647058823529, 1.0, 0.0),
RGB(0.8431372549019608, 1.0, 0.0),
RGB(0.8745098039215686, 1.0, 0.0),
RGB(0.9058823529411765, 1.0, 0.0),
RGB(0.9372549019607843, 1.0, 0.0),
RGB(0.9686274509803922, 1.0, 0.0),
RGB(1.0, 1.0, 0.0),
RGB(1.0, 0.9764705882352941, 0.0),
RGB(1.0, 0.9568627450980393, 0.0),
RGB(1.0, 0.9372549019607843, 0.0),
RGB(1.0, 0.9137254901960784, 0.0),
RGB(1.0, 0.8941176470588236, 0.0),
RGB(1.0, 0.8745098039215686, 0.0),
RGB(1.0, 0.8509803921568627, 0.0),
RGB(1.0, 0.8313725490196079, 0.0),
RGB(1.0, 0.8117647058823529, 0.0),
RGB(1.0, 0.788235294117647, 0.0),
RGB(1.0, 0.7686274509803922, 0.0),
RGB(1.0, 0.7490196078431373, 0.0),
RGB(1.0, 0.7254901960784313, 0.0),
RGB(1.0, 0.7058823529411765, 0.0),
RGB(1.0, 0.6862745098039216, 0.0),
RGB(1.0, 0.6666666666666666, 0.0),
RGB(1.0, 0.6431372549019608, 0.0),
RGB(1.0, 0.6235294117647059, 0.0),
RGB(1.0, 0.6039215686274509, 0.0),
RGB(1.0, 0.5803921568627451, 0.0),
RGB(1.0, 0.5607843137254902, 0.0),
RGB(1.0, 0.5411764705882353, 0.0),
RGB(1.0, 0.5176470588235295, 0.0),
RGB(1.0, 0.4980392156862745, 0.0),
RGB(1.0, 0.47843137254901963, 0.0),
RGB(1.0, 0.4549019607843137, 0.0),
RGB(1.0, 0.43529411764705883, 0.0),
RGB(1.0, 0.41568627450980394, 0.0),
RGB(1.0, 0.39215686274509803, 0.0),
RGB(1.0, 0.37254901960784315, 0.0),
RGB(1.0, 0.35294117647058826, 0.0),
RGB(1.0, 0.3333333333333333, 0.0),
RGB(1.0, 0.30980392156862746, 0.0),
RGB(1.0, 0.2901960784313726, 0.0),
RGB(1.0, 0.27058823529411763, 0.0),
RGB(1.0, 0.24705882352941178, 0.0),
RGB(1.0, 0.22745098039215686, 0.0),
RGB(1.0, 0.20784313725490197, 0.0),
RGB(1.0, 0.1843137254901961, 0.0),
RGB(1.0, 0.16470588235294117, 0.0),
RGB(1.0, 0.1450980392156863, 0.0),
RGB(1.0, 0.12156862745098039, 0.0),
RGB(1.0, 0.10196078431372549, 0.0),
RGB(1.0, 0.08235294117647059, 0.0),
RGB(1.0, 0.058823529411764705, 0.0),
RGB(1.0, 0.0392156862745098, 0.0),
RGB(1.0, 0.0196078431372549, 0.0),
RGB(1.0, 0.0, 0.0),
RGB(1.0, 0.0, 0.058823529411764705),
RGB(1.0, 0.0, 0.12156862745098039),
RGB(1.0, 0.0, 0.1843137254901961),
RGB(1.0, 0.0, 0.24705882352941178),
RGB(1.0, 0.0, 0.30980392156862746),
RGB(1.0, 0.0, 0.37254901960784315),
RGB(1.0, 0.0, 0.43529411764705883),
RGB(1.0, 0.0, 0.4980392156862745),
RGB(1.0, 0.0, 0.5607843137254902),
RGB(1.0, 0.0, 0.6235294117647059),
RGB(1.0, 0.0, 0.6862745098039216),
RGB(1.0, 0.0, 0.7490196078431373),
RGB(1.0, 0.0, 0.8117647058823529),
RGB(1.0, 0.0, 0.8745098039215686),
RGB(1.0, 0.0, 0.9372549019607843),
], "general", "fastie, vegetation index, NDVI")