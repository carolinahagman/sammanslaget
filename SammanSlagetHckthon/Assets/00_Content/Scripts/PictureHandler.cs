using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PictureHandler : MonoBehaviour {

	private Image refPicture;
	private Button refButton;
	private Sprite spriteToShow;
	private float timeForFade;

	public void RecievePicture(Image refPicture, Sprite spriteToShow, float timeForFade) {

		this.refPicture = refPicture;
		this.spriteToShow = spriteToShow;
		this.timeForFade = timeForFade;

		refPicture.sprite = spriteToShow;

		//sets the picture to be completely invisible
		refPicture.color = new Color(1, 1, 1, 0);

		StartCoroutine(ShowImage());

	}
	
	IEnumerator ShowImage() { 
		//pic becomes clearer over timeForFade amount of time in s.
		for (float i = 0; i <= timeForFade; i += Time.deltaTime) {
			refPicture.color = new Color(1, 1, 1, i);
			yield return null;
		}
			
	}
}
