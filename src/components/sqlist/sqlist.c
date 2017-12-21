#include <webassembly.h>

#define cWidth 800
#define cHeight 800

extern print(char* message);
extern jsFillRect(double x, double y, double w, double h);
extern jsClearRect(double x, double y, double w, double h);
extern jsFillCircle(double x, double y, int r, int red, int green, int black, double alpha);
extern jsFillCircleColorful(double x, double y, int r);

extern jsFillFPS(int num);

extern int timeNow();
extern raFrame(void (*cb)());

export void runCallback(void (*cb)()) {
    return cb();
}

//通用的方法
int randomIntNumber(int min, int max) {
    return min + Math_random() * (max - min);
}

int preTime = 0;
int getFps() {
    int nowTime = timeNow();
    int elapse = nowTime - preTime;
    int fps = 1000 / elapse;
    preTime = nowTime;
    return fps;
}

typedef struct {
    double x;
    double y;
} Point;

typedef struct {
    Point point;
    double xDistance;
    double yDistance;
    double xDirection;
    double yDirection;
    double height;
    double width;

} Rect;
int maxDistance = 60;
int maxSize = 300;
int maxRectArrSize = 10;
Rect rectArr[10];
export void initRects() {
    for (int i = 0; i < maxRectArrSize; ++i) {
        Point p = {
                randomIntNumber(0, cWidth),
                randomIntNumber(0, cHeight)
        };
        int xDis = randomIntNumber(0, maxDistance);
        int yDis = randomIntNumber(0, maxDistance);
        int xDirection = randomIntNumber(0, 2) > 1 ? 1 : -1;
        int yDirection = randomIntNumber(0, 2) > 1 ? 1 : -1;
        int width = randomIntNumber(10, maxSize);
        int height = randomIntNumber(10, maxSize);
        rectArr[i].point = p;
        rectArr[i].xDistance = xDis;
        rectArr[i].yDistance = yDis;
        rectArr[i].xDirection = xDirection;
        rectArr[i].yDirection = yDirection;
        rectArr[i].width = width;
        rectArr[i].height = height;
    }
}

typedef struct {
    Point point;
    int r;
    double xDistance;
    double yDistance;
    double xDirection;
    double yDirection;
    int red;
    int green;
    int black;
    double alpha;
} Circle;

const int maxCircleSize = 10;
int maxCircleRadius = 100;


Circle circles[maxCircleSize];
export void initCircles() {
    for (int i = 0; i < maxCircleSize; ++i) {
        Point p = {
                randomIntNumber(0, cWidth),
                randomIntNumber(0, cHeight)
        };
        int r = randomIntNumber(0, maxCircleRadius);
        int xDis = randomIntNumber(0, maxDistance);
        int yDis = randomIntNumber(0, maxDistance);
        int xDirection = randomIntNumber(0, 2) > 1 ? 1 : -1;
        int yDirection = randomIntNumber(0, 2) > 1 ? 1 : -1;
        int red = Math_floor(Math_random() * 256);
        int green = Math_floor(Math_random() * 256);
        int black = Math_floor(Math_random() * 256);
        double alpha = 0.1 + Math_random();
        circles[i].point = p;
        circles[i].r = r;
        circles[i].xDistance = xDis;
        circles[i].yDistance = yDis;
        circles[i].xDirection = xDirection;
        circles[i].yDirection = yDirection;
        circles[i].red = red;
        circles[i].green = green;
        circles[i].black = black;
        circles[i].alpha = alpha;
        console_log("alpha c %lf", alpha);
    }
}

 export void drawCircle() {
    for (int i = 0; i < maxCircleSize; ++i) {
        if (circles[i].point.x >= cWidth - circles[i].r) {
            circles[i].point.x = cWidth - circles[i].r;
            circles[i].xDirection *= -1;
        }
        if (circles[i].point.y >= cHeight - circles[i].r) {
            circles[i].point.y = cHeight - circles[i].r;
            circles[i].yDirection *= -1;
        }

        if (circles[i].point.x < 0) {
            circles[i].point.x = 0;
            circles[i].xDirection *= -1;
        }
        if (circles[i].point.y < 0) {
            circles[i].point.y = 0;
            circles[i].yDirection *= -1;
        }

        circles[i].point.x += circles[i].xDistance * circles[i].xDirection;
        circles[i].point.y += circles[i].yDistance * circles[i].yDirection;
        jsFillCircle(circles[i].point.x, circles[i].point.y, circles[i].r, circles[i].red, circles[i].green, circles[i].black, circles[i].alpha);
    }
}

 void drawRect() {

     for (int i = 0; i < maxRectArrSize; ++i) {
        if (rectArr[i].point.x >= cWidth - rectArr[i].width) {
            rectArr[i].point.x = cWidth - rectArr[i].width;
            rectArr[i].xDirection *= -1;
        }
        if (rectArr[i].point.y >= cHeight - rectArr[i].height) {
            rectArr[i].point.y = cHeight - rectArr[i].height;
            rectArr[i].yDirection *= -1;
        }

        if (rectArr[i].point.x < 0) {
            rectArr[i].point.x = 0;
            rectArr[i].xDirection *= -1;
        }
        if (rectArr[i].point.y < 0) {
            rectArr[i].point.y = 0;
            rectArr[i].yDirection *= -1;
        }
//         console_log("x's coordinate is : %lf\n", rects[i].point.x);
//         console_log("distance * direction is : %lf\n", rects[i].xDirection * rects[i].xDistance);
         rectArr[i].point.x += rectArr[i].xDistance * rectArr[i].xDirection;
//         console_log("x's coordinate: %lf\n", rects[i].point.x);
        rectArr[i].point.y += rectArr[i].yDistance * rectArr[i].yDirection;
        jsFillRect(rectArr[i].point.x, rectArr[i].point.y, rectArr[i].width, rectArr[i].height);
    }
}

export void animateCircle() {
    jsClearRect(0, 0, cWidth, cHeight);
    drawCircle();
    jsFillFPS(getFps());
    raFrame(animateCircle);
}

export void test() {
    jsClearRect(0, 0, cWidth, cHeight);
    drawRect();
    raFrame(test);

    jsFillFPS(getFps());
//    console_log("fps is %d",  getFps());

}


