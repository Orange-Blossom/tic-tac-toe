class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.gameMatrix = [[],[],[]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameMatrix[rowIndex][columnIndex] == null) {
            (this.currentPlayer == 'x') ? this.gameMatrix[rowIndex][columnIndex] = 1 : this.gameMatrix[rowIndex][columnIndex] = 0;
            (this.currentPlayer == 'x') ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
        }
    }

    isFinished() {
        return this.getWinner()!=null || this.isDraw();
    }

    getWinner() {
        var row, col;
        var de = 0, di = 0;
        for (var i=0,j=0; i<=2; i++,j++) {
            row = this.gameMatrix[i][0]+this.gameMatrix[i][1]+this.gameMatrix[i][2];
            col = this.gameMatrix[0][j]+this.gameMatrix[1][j]+this.gameMatrix[2][j];
            de += this.gameMatrix[i][j];
            di += this.gameMatrix[2-i][j];
            if (row==3 || col==3) {
                return 'x';
            }
            else if (row==0 || col==0) {
                return 'o';
            }
        }
        if (de==3 || di==3) {
            return 'x';
        }
        if (de==0 || di==0) {
            return 'o';
        }
        return null;
    }

    noMoreTurns() {
        for (var i=0; i<=2; i++) {
            for (var j=0; j<=2; j++) {
                if (this.gameMatrix[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns()
    }

    getFieldValue(rowIndex, colIndex) {
        var result =
            (this.gameMatrix[rowIndex][colIndex] == 1) ?  'x' :
            (this.gameMatrix[rowIndex][colIndex] == 0) ?  'o' : null;
        return result;
    }
}

module.exports = TicTacToe;
