import {OnDestroy, OnInit} from '@angular/core';

export abstract class Base implements OnInit, OnDestroy {

	isAlive = true;

	ngOnInit(): void {
	}

	// .pipe(takeWhile(x => this.isAlive))

	ngOnDestroy(): void {
		this.isAlive = false;
	}
}
