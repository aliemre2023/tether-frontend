

enum Skill {
    NONE = 0,
    KNIFE = 1,
    SHIELD = 2,
    BALL = 3,

}

interface Position {
    triangle: Triangle,
    stackIndex: number,
}

interface Stone {
    id: number;
    color: boolean;
    skill: Skill;
    position: Position;

    move(old_triangle: Triangle, new_triangle: Triangle) {
        Stone stone = old_triangle.top();
        old_triangle.pop();
        new_triangle.push(stone);
    }
}